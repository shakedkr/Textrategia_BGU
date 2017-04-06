/*------------------ users -----------------*/
insert into users
values (1,"דמרי","עידן","Techni","Beer Sheva",1,"idandamri@gmail.com","123456");

insert into users
values (2,"קריגל","שקד","Mekif H","Ashdod",2,"shakedkr@post.bgu.ac.il","123456");

insert into users
values (3,"גנים","הדס","Mevuot","Ashdod",2,"hadasganim@gmail.com","123456");

insert into users
values (4,"שטורם","ארנון","BGU","Beer Sheva",1,"sturm@bgu.ac.il","123456");
/*------------------------------------------*/

/*-------------- tasks ---------------------*/
insert into tasks
values(1,"מטלת ניסוי","מטלת ניסוי לבסיס הנתונים");

insert into tasks
values(2,"2מטלת ניסוי","מטלת ניסוי לבסיס הנתונים");

/*------------------------------------------*/

/*--------------- groups -------------------*/
insert into groups
values(123456,"טקסטרטגיה", 4, true,"0123");

insert into groups
values(1234567,"שיעור פרטי", 1, false,"0123456");
/*------------------------------------------*/

/*----------- students_per_group -----------*/
insert into students_per_group
values(1,123456);

insert into students_per_group
values(2,123456);

insert into students_per_group
values(3,123456);

insert into students_per_group
values(4,1234567);

insert into students_per_group
values(2,1234567);
/*------------------------------------------*/

/*----------- textra_db.tasks_joined_with_questions ---------*/

insert into tasks_joined_with_questions
values (1,1);

insert into tasks_joined_with_questions
values (1,2);

insert into tasks_joined_with_questions
values (1,3);

insert into tasks_joined_with_questions
values (1,4);

/*task2*/
insert into tasks_joined_with_questions
values (2,1);

insert into tasks_joined_with_questions
values (2,2);

insert into tasks_joined_with_questions
values (2,3);

insert into tasks_joined_with_questions
values (2,4);



/*----------- tasks_and_question_for_student_instances ---------*/
/*idan user*/
insert into tasks_and_question_for_student_instances
values(1,1,1);

insert into tasks_and_question_for_student_instances
values(1,1,2);

insert into tasks_and_question_for_student_instances
values(1,1,3);

insert into tasks_and_question_for_student_instances
values(1,1,4);


insert into tasks_and_question_for_student_instances
values(1,2,1);

insert into tasks_and_question_for_student_instances
values(1,2,2);

insert into tasks_and_question_for_student_instances
values(1,2,3);

insert into tasks_and_question_for_student_instances
values(1,2,4);



/*arnon user*/
insert into tasks_and_question_for_student_instances
values(4,1,1);

insert into tasks_and_question_for_student_instances
values(4,1,2);

insert into tasks_and_question_for_student_instances
values(4,1,3);

insert into tasks_and_question_for_student_instances
values(4,1,4);


insert into tasks_and_question_for_student_instances
values(4,2,1);

insert into tasks_and_question_for_student_instances
values(4,2,2);

insert into tasks_and_question_for_student_instances
values(4,2,3);

insert into tasks_and_question_for_student_instances
values(4,2,4);

/*shaked user*/
insert into tasks_and_question_for_student_instances
values(2,1,1);

insert into tasks_and_question_for_student_instances
values(2,1,2);

insert into tasks_and_question_for_student_instances
values(2,1,3);

insert into tasks_and_question_for_student_instances
values(2,1,4);


insert into tasks_and_question_for_student_instances
values(2,2,1);

insert into tasks_and_question_for_student_instances
values(2,2,2);

insert into tasks_and_question_for_student_instances
values(2,2,3);

insert into tasks_and_question_for_student_instances
values(2,2,4);

insert into tasks_and_question_for_student_instances
values(2,2,8);







/*------------------------------------------*/

/*----------- instances_of_answers 
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '1', '1');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '1', '2');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '1', '3');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '1', '4');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '2', '1');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '2', '2');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '2', '3');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '2', '4');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '3', '1');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '3', '2');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '3', '3');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '3', '4');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '4', '1');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '4', '2');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '4', '3');
INSERT INTO `textra_db`.`instances_of_answers` (`studentId`, `T_id`, `Q_id`, `A_id`) VALUES ('1', '1', '4', '4');
/*------------------------------------------*/
