DROP DATABASE ace;
CREATE DATABASE ace;

USE ace;

CREATE TABLE User (
    id varchar(63) UNIQUE PRIMARY KEY,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    empId varchar(10) NOT NULL,
    password varchar(255) NOT NULL
);

CREATE TABLE Post(
    id varchar(63) UNIQUE PRIMARY KEY,
    userId int NOT NULL,
    title varchar(255) NOT NULL,
    description varchar(4095) NOT NULL,
    imageURL varchar(255) NOT NULL
);