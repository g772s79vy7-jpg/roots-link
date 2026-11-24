create schema if not exists roots_internal;
create table if not exists roots_internal.matches (
  room_id uuid primary key references public.rooms(id) on delete cascade,
  revision integer not null default 0,
  state jsonb not null
);
alter table roots_internal.matches enable row level security;
create or replace function public.roots_match_load(p_room uuid,p_user uuid)
returns jsonb language sql security definer set search_path='' as $$
 select jsonb_build_object('host',r.host_id,'guest',r.guest_id,'revision',coalesce(m.revision,-1),'state',m.state)
 from public.rooms r left join roots_internal.matches m on m.room_id=r.id
 where r.id=p_room and r.status='playing' and p_user in (r.host_id,r.guest_id)
$$;
create or replace function public.roots_match_save(p_room uuid,p_user uuid,p_revision integer,p_state jsonb)
returns boolean language plpgsql security definer set search_path='' as $$
begin
 if not exists(select 1 from public.rooms r where r.id=p_room and r.status='playing' and p_user in (r.host_id,r.guest_id)) then return false; end if;
 if p_revision=-1 then
   insert into roots_internal.matches(room_id,state) values(p_room,p_state) on conflict do nothing;
 else
   update roots_internal.matches set state=p_state,revision=revision+1 where room_id=p_room and revision=p_revision;
 end if;
 return found;
end $$;
revoke all on function public.roots_match_load(uuid,uuid),public.roots_match_save(uuid,uuid,integer,jsonb) from public,anon,authenticated;
grant execute on function public.roots_match_load(uuid,uuid),public.roots_match_save(uuid,uuid,integer,jsonb) to service_role;
