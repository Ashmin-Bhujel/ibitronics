create table products (
  id int auto_increment primary key,
  category varchar(255) not null,
  name varchar(255) not null,
  image varchar(255) not null,
  storage int not null,
  display decimal(10, 2) not null,
  chip varchar(255) not null,
  battery int not null,
  os varchar(255) not null,
  price decimal(10, 2) not null,
  stockAvailability boolean not null,
  createdAt timestamp default current_timestamp
);