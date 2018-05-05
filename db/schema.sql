DROP DATABASE IF EXISTS burger_joint;

CREATE DATABASE burger_joint;

USE burger_joint;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    devoured BOOLEAN DEFAULT 0
);