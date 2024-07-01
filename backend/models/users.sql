create table users (
  id int auto_increment primary key,
  username varchar(255) not null,
  fullName varchar(255) not null,
  email varchar(255) unique not null,
  password varchar(255) not null,
  isAdmin boolean default false,
  created_at timestamp default current_timestamp
);