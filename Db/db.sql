CREATE DATABASE hackathon;

create table user
(
    user_id int,
    full_name varchar(50),
    email varchar(30),
    password varchar(20),
    phone_no char(10),
    created_time Date
);

create table blogs
(
    blog_id int,
    blog_title varchar(20),
    contents varchar(30),
    created_time Date,
    user_id int,
    category_id int
);

created table categories
(
    category_id int,
    category_title varchar(30),
    description varchar(50)
);

