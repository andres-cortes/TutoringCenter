create table student (
  id int(11) NOT NULL AUTO_INCREMENT,
  firstname varchar(45) NOT NULL,
  lastname varchar(45) NOT NULL,
  PRIMARY KEY (id)
);

create table tutor (
	id int(11) NOT NULL AUTO_INCREMENT,
  firstname varchar(45) NOT NULL,
  lastname varchar(45) NOT NULL,
  primary_subject varchar(45),
  PRIMARY KEY (id)
);

create table session (
	id int(11) NOT NULL AUTO_INCREMENT,
  student_id int(11) NOT NULL,
  tutor_id int(11),
  student_arrive TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  check_in TIMESTAMP,
  check_out TIMESTAMP,
  subject varchar(45),
  PRIMARY KEY (id),
  FOREIGN KEY (student_id) REFERENCES student (id),
  FOREIGN KEY (tutor_id) REFERENCES tutor (id)
);

insert into `student` (`id`, `firstname`, `lastname`) values('1','Bob', 'Bobson');
insert into `student` (`id`, `firstname`, `lastname`) values('2','John', 'Doe');
insert into `student` (`id`, `firstname`, `lastname`) values('3','Peggie', 'Carter');
insert into `student` (`id`, `firstname`, `lastname`) values('4','Obadiah', 'Stane');
insert into `tutor` (`id`, `firstname`, `lastname`, `primary_subject`) values('1','Andres', 'Cortes', 'Mathematics');
insert into `tutor` (`firstname`, `lastname`, `primary_subject`) values('Luis', 'Lopez', 'Biology');
insert into `session` (`id`, `student_id`, `tutor_id`, `subject`) values ('1', '2', '1', 'Mathematics');
insert into `session` (`id`, `student_id`, `tutor_id`, `subject`) values ('2', '3', '2', 'Biology');
