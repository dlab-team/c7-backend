create table roles (
	id serial primary key,
	name varchar(255) not null
);

create table user_statuses (
	id serial primary key,
	name varchar(255) not null
);

create table users (
    id serial primary key,
    name varchar(255) not null,
    last_name varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    role_id integer references roles(id),
    status_id integer references user_statuses(id)
);