create database textra_db;
use textra_db;

create table users (
PersonalID varchar(10) not null,
LastName varchar(255) not null,
FirstName varchar(255) not null,
School varchar(255) not null,
City varchar(255) not null,
UserType int not null,
Email varchar(255) not null,
Pass varchar(255) not null,
primary key (PersonalID)
);

create table questions
(
Q_id bigint unsigned not null,
Q_qeustion varchar(500) not null,
isMultipuleAns boolean not null,
Q_mediaType int not null,
Q_media varchar(255) not null,
Q_correctFB varchar(500) not null,
Q_notCorrectFB varchar(500) not null,
Q_skill varchar(255) not null,
Q_difficulty varchar(255)not null,
Q_proffession varchar(255) not null,
Q_approved boolean not null,
Q_disabled boolean not null,
primary key (Q_id)
);

create table answers
(
A_id bigint unsigned not null,
Q_id bigint unsigned not null,
answer varchar(255) not null,
isCorrect boolean not null,
primary key (A_id, Q_id)
);

create table tasks
(
T_id bigint unsigned not null,
T_title varchar(100) not null,
T_description varchar(500) not null,
primary key (T_id)
);

create table tasks_joined_with_questions(
T_id bigint unsigned not null,
Q_id bigint unsigned not null,
foreign key (T_id) references tasks(T_id),
foreign key (Q_id) references questions(Q_id),
primary key (T_id, Q_id)
);

create table groups
(
GroupId bigint unsigned not null,
GroupName varchar(100) not null,
teacherID varchar(10) not null,
IsMasterGroup boolean not null,
GroupeCode varchar(20),
primary key (GroupId),
foreign key (teacherID) references users(PersonalID)
);

create table students_per_group
(
StudentId varchar(10) not null,
GroupId bigint unsigned not null,
foreign key (StudentId) references users(PersonalID),
foreign key (GroupId) references groups(GroupId),
primary key (StudentId, GroupId)
);

create table mother_of_all_tables
(
instanceTime timestamp not null,
studentId varchar(10) not null,
taskId bigint unsigned not null,
Q_id bigint unsigned not null,
A_id bigint unsigned not null,
foreign key (taskId) references tasks(T_id),
foreign key (studentId) references users(PersonalID),
foreign key (Q_id) references questions(Q_id),
foreign key (A_id) references answers(A_id),
primary key (A_id,Q_id,taskId,studentId)
);