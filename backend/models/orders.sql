create table orders (
  id int auto_increment primary key,
  userId int not null,
  cartInfo json not null,
  createdAt timestamp not null default now(),
  foreign key (userId) references users(id)
);