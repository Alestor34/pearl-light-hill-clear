-- CMS for نازلی فینگر فود: settings, editable copy/images, categories, products.
create table if not exists site_settings (
  id integer primary key check (id = 1),
  phone text not null default '+989129564648',
  instagram text not null default 'fingerfood.nazli',
  orders_closed boolean not null default false,
  orders_closed_until date,
  orders_closed_message text not null default 'سفارش‌ها تا تاریخ مشخص‌شده بسته است. برای هماهنگی بعدی با ما در واتساپ در تماس باشید.',
  admin_pin text not null default 'nazli',
  seeded boolean not null default false
);

insert into site_settings (id) values (1) on conflict (id) do nothing;

create table if not exists site_content (
  key text primary key,
  value text not null default '',
  kind text not null default 'text'
);

create table if not exists categories (
  id serial primary key,
  name text not null,
  slug text not null unique,
  description text not null default '',
  image text not null default '',
  visible boolean not null default true,
  sort_order integer not null default 0
);

create table if not exists products (
  id serial primary key,
  category_id integer not null references categories(id) on delete cascade,
  name text not null,
  description text not null default '',
  price integer not null default 0,
  unit text not null default '۱۰ عدد',
  image text not null default '',
  badge text not null default '',
  visible boolean not null default true,
  sort_order integer not null default 0
);

create index if not exists products_category_id_idx on products (category_id);
create index if not exists products_sort_idx on products (sort_order, id);
create index if not exists categories_sort_idx on categories (sort_order, id);

create table if not exists admin_sessions (
  token text primary key,
  created_at timestamptz not null default now()
);
