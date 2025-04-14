CREATE DATABASE hackathon;

USE hackathon;

create table user
(
    user_id int primary key auto_increment,
    full_name varchar(50),
    email varchar(30),
    password varchar(20),
    phone_no char(10),
    created_time DATETIME default current_timestamp
);

create table blogs
(
    blog_id int primary key auto_increment,
    blog_title varchar(20),
    contents varchar(30),
    blog_created_time DATETIME default current_timestamp, 
    user_id int,
    category_id int,
    foreign key (user_id) references user (user_id)
);

create table categories
(
    category_id int,
    category_title varchar(30),
    description varchar(50)
);