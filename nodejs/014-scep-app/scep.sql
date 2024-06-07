
CREATE TABLE students (
student_id int(11) NOT NULL AUTO_INCREMENT,
first_name varchar(255) NOT NULL,
last_name varchar(255) NOT NULL,
email varchar(60) NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY (student_id)
)

CREATE TABLE courses (
course_id int(11) NOT NULL AUTO_INCREMENT,
title varchar(255) NOT NULL,
instructor varchar(255) NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY (course_id)
)

CREATE TABLE enrollments (
enrollemnt_id int(11) NOT NULL AUTO_INCREMENT,
student_id int(11) NOT NULL,
course_id int(11) NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY (enrollemnt_id),
FOREIGN KEY (student_id) REFERENCES students(student_id),
FOREIGN KEY (course_id) REFERENCES courses(course_id)
)

CREATE TABLE payments (
payment_id int(11) NOT NULL AUTO_INCREMENT,
student_id int(11) NOT NULL,
course_id int(11) NOT NULL,
amount int(11) NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY (payment_id),
FOREIGN KEY (student_id) REFERENCES students(student_id),
FOREIGN KEY (course_id) REFERENCES courses(course_id)
)

CREATE TABLE admins (
admin_id int(11) NOT NULL AUTO_INCREMENT,
email varchar(60) NOT NULL,
password varchar(60) NOT NULL,
role varchar(20) NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY (admin_id)
)

INSERT INTO `admins` (`admin_id`, `email`, `password`, `role`) VALUES (NULL, 'pera@mail.com', '12345', 'admin')