module.exports =
    {
        /*get user data (names,school name,user type) by user identifier (id or email) and password*/
        getDataForUserByIdOrEmail: function (user_identifier, password) {
            return "SELECT * FROM textra_db.users " +
                "WHERE (PersonalID like " + user_identifier + " or Email like " + user_identifier + ") " +
                " and Pass like " + password + ";";
        },


        /*get all tasks's information (id,title and description) by student id*/
        gelAllTaskTitleByStudentId: function (user_id) {
            return "select tasks.* from " +
                "(select T_id " +
                "from tasks_and_question_for_student_instances " +
                "where studentId like " + user_id + " " +
                "group by (T_id)) as t1 " +
                "inner join tasks " +
                "on t1.T_id like tasks.T_id;";
        },

        //TODO - check if needed
        /* not yet final. will update in the maraton (see notes.txt file)
         get number of correct answer for a task by task id and student id
         *return 2 attribute - number of correct ans | number of total qustion in task
         */
        /*        getNumberOfCorrectAnswersForTask: function (taks_id, student_id) {
         var query =
         "select * from" +
         "(select * from" +
         "(select *" +
         "from textra_db.mother_of_all_tables" +
         "where studentId = " + student_id +
         "and taskId =" + task_id +
         "order by instanceTime desc) as t1 /!* this sort by instance time and requested value *!/" +
         "group by studentId,taskId,Q_id) as t2 /!*this remove the first record (if exist)*!/" +
         "inner join textra_db.answers /!*in order to check if the answer is correctanswers*!/" +
         "on textra_db.answers.Q_id= t2.Q_id" +
         "and textra_db.answers.A_id= t2.A_id " +
         "and isCorrect=1;";
         return query;
         },*/

        /*        getNumberOfQuestionForTask: function (t_id) {
         var query = "select count(*) as numberOfQuestion from tasks_joined_with_questions where T_id =" +
         t_id + ";";
         return query;
         },*/

        getAnswersByTaskAndUser: function (user_id, t_id) {
            return "select " + /*T.Q_id, T.Q_qeustion, T.isMultipuleAns, T.Q_correctFB, T.Q_notCorrectFB,*/" answers.A_id, " +
                "answers.answer, answers.isCorrect from ((select * from questions " +
                "where questions.Q_id = (select questions.Q_id from tasks_and_question_for_student_instances " +
                "join questions on tasks_and_question_for_student_instances.T_id = " + t_id +
                " and tasks_and_question_for_student_instances.studentID = " + user_id +
                " and tasks_and_question_for_student_instances.Q_id = questions.Q_id limit 1))" +
                "as T JOIN answers on T.Q_id = answers.Q_id);";
        },

        submitStudentsAnswerForQuestion: function (student_id, task_id, q_id, a_id) {
            return "insert into textra_db.instances_of_answers " +
                "values(current_timestamp," + student_id + "," + task_id + "," + q_id + "," + a_id + ");\n";
        },

        //delete from textra_db.tasks_and_question_for_student_instances where studentId like '2' and T_id = '1' and Q_id = '1'
        deleteQuestionsFromInstance: function (student_id, task_id, q_id) {
            return "delete from textra_db.tasks_and_question_for_student_instances where studentId like " +
                student_id + " and T_id = " + task_id + " and Q_id = " + q_id + ";";
        },

        getTasks: function () {
            return "select * from textra_db.tasks where T_owner != 6;";
        },

        addUsersToGroup: function (user_id, group_id) {
            return "insert into textra_db.students_per_group values (" + user_id + "," + group_id + ");";
        },

        getGroupsByUser: function (user_id) {
            return "SELECT * FROM textra_db.groups where teacherID = " + user_id + ";";
        },

        getStudentsFromGroup: function (group_id) {
            return "SELECT StudentId FROM textra_db.students_per_group where GroupId = " + group_id + ";";
        },

        getGroupsByTeacherAndCity: function (teacherId, city) {
            return "SELECT * FROM textra_db.groups where teacherID = " + teacherId + " and City = " + city + ";";
        },

        getValidQuestions: function (is_app, is_disabled) {
            return "SELECT * FROM textra_db.questions where Q_approved = " + is_app + " and Q_disabled = " + is_disabled + ";";
        },

        getGroupsBySchool: function (schoolName) {
            return "SELECT * FROM textra_db.groups where School = " + schoolName + ";";
        },

        getUserId: function (email) {
            return "SELECT PersonalID FROM textra_db.users where Email = " + email + ";";
        },

        getQestionsAndTasksForinstance: function (t_id) {
            return "select T_id, Q_id from textra_db.tasks_joined_with_questions where T_id = " + t_id + ";";
        },

        addTaskQuestionStudentInstance: function (stud_id, t_id, q_id) {
            return "insert into textra_db.tasks_and_question_for_student_instances values(" + stud_id + "," + t_id + "," + q_id + ");";
        },

        addQustion: function (question_title, isMultipleAns, question_media, question_media_type,
                              quest_correct_FB, quest_incorrect_FB, quest_skill, quest_difficulty, quest_proffesion,
                              quest_is_approved, quest_disabled, quest_creator) {
            return "INSERT INTO textra_db.questions VALUES (null," + question_title + "," + isMultipleAns + ","
                + question_media_type + "," + question_media + "," + quest_correct_FB + "," + quest_incorrect_FB + ","
                + quest_skill + "," + quest_difficulty + "," + quest_proffesion + ", 0," + quest_is_approved + ","
                + quest_disabled + "," + quest_creator + ");";
        },

        createGroup: function (g_name, school, city, teacher_id, is_teacher_group, is_master_g, g_code, group_user_type, is_app) {
            return "INSERT INTO textra_db.groups VALUES (null," +
                g_name + "," + school + "," + city + "," + teacher_id + "," + is_teacher_group + ","
                + is_master_g + "," + g_code + "," + group_user_type + "," + is_app + ");";
        },

        reportQuestion: function (q_id) {
            return "UPDATE textra_db.questions SET Q_reported=Q_reported+1 WHERE Q_id = " + q_id + ";";
        },

        getGroupIdfromcode: function (g_code) {
            return "select GroupId from textra_db.groups where GroupeCode = " + g_code + ";";
        },

        registerUser: function (personalId, lastName, firstName, userType, email, password) {
            return "insert into textra_db.users values(" + personalId + ", " + lastName + ", " + firstName + ", "
                + userType + ", " + email + ", " + password + ");";
        },

        approveQuestion: function (q_id, isApproved) {
            return "UPDATE textra_db.questions SET Q_approved = " + isApproved + " WHERE Q_id = " + q_id + ";";
        },

        disableQuestion: function (q_id, isDisabled) {
            return "UPDATE textra_db.questions SET Q_approved = " + isDisabled + " WHERE Q_id = " + q_id + ";";
        },

        updateQuestion: function (q_id, q_question, q_media, q_correctFB, q_notCorrectFB, q_skill, q_diff, q_proff, q_app, q_disable) {
            return "UPDATE textra_db.questions SET Q_question  = " + q_question + ", Q_media = " + q_media +
                ", Q_correctFB = " + q_correctFB + ", Q_notCorrectFB = " + q_notCorrectFB + ", Q_skill = " + q_skill +
                ", Q_difficulty = " + q_diff + ", Q_proffession = " + q_proff + ", Q_disabled = " + q_disable +
                ", Q_approved = " + q_app + " WHERE Q_id = " + q_id + ";";
        },

        getFullQuestionByQid: function (q_id) {
            return "select T.Q_id, T.Q_question, T.isMultipuleAns, " +
                "T.Q_correctFB, T.Q_mediaType, T.Q_media," +
                "T.Q_notCorrectFB, T.Q_skill, T.Q_difficulty," +
                "T.Q_proffession, T.Q_approved, T.Q_disabled " +
                "from (select * from questions where questions.Q_id = " + q_id + ") as T;";
        },

        getSingleQuestionIdFromTaskIdAndUserId: function (user_id, t_id) {
            return "SELECT Q_id FROM textra_db.tasks_and_question_for_student_instances " +
                "where studentId = " + user_id + " and T_id = " + t_id + " limit 1;";
        },

//TODO check if needed..
    /*getAnswersByTidQidSid: function (/!*s_id, t_id, *!/q_id) {
     var query = "select * from textra_db.tasks where Q_id like /'" + q_id + "'/";
     return query;
     }*/

    addNewTask: function (t_title, t_description, t_owner, t_approved) {
        return "insert into textra_db.tasks values(null," + t_title + "," + t_description + ","
            + t_owner + "," + t_approved + ");";
    },

    addNewTaskGenRand: function (t_title, t_description, t_owner, t_approved) {
        return "insert into textra_db.tasks values(null,'" + t_title + "','" + t_description + "',"
            + t_owner + "," + t_approved + ") RETURNING T_id;";
    },

    joinNewTaskWithQuestion: function (t_id, q_id) {
        return "insert into textra_db.tasks_joined_with_questions values(" + t_id + "," + q_id + ");";
    },

    getHighestIdFromTable: function (table_name, attribute_id) {
        return "select " + attribute_id + " from textra_db." + table_name + " where " + attribute_id
            + " = ( select max(" + attribute_id + ") from textra_db." + table_name + " );";
    },

    checkIfGroupCodeExists: function (group_code) {
        return "select groups.isTeacherGroup from textra_db.groups where GroupeCode = " + group_code + ";";
    },

    checkIfEmailExist: function (email) {
        return "select Email from textra_db.users where Email like " + email + ";";
    },

    chooseGroupsAvalibleToTask: function (task_id, teacher_id) {
        return "SELECT * FROM textra_db.groups where GroupId not in ("
            + "SELECT distinct GroupId FROM textra_db.students_per_group where StudentId in (" +
            "SELECT distinct studentId FROM textra_db.tasks_and_question_for_student_instances where T_id in (" + task_id + ")))" +
            "and teacherID = " + teacher_id + ";"
    },


    insertAnswer: function (question_id, answer, isCorrect) {
        return "insert into textra_db.answers values (null," + question_id + ",'" + answer + "'," + isCorrect + ");"
    },

    getAllStudentForGroup: function (group_id) {
        return "select * from textra_db.users where PersonalId in (" +
            "SELECT StudentId FROM textra_db.students_per_group where GroupId =" + group_id + ");"
    },

    getAllGroupForTeacher: function (user_id) {
        return "select * from textra_db.groups where teacherID =" + user_id + ";"
    },
    getGroupBySchoolAndCity: function (school, city) {
        return "select * from textra_db.groups where School like " + school + " and City like " + city + ";"
    },
    getAllSchollByCity: function (city) {
        return "select School from textra_db.cities_and_schools where City like " + city + ";"
    },

    addNewSchool: function (city, school) {
        return "insert into textra_db.cities_and_schools values (" + school + " , " + city + ");"
    },
    getQuestionsByParamter: function (media_types, skills, difficulties) {
        return "SELECT * FROM textra_db.questions " +
            "where Q_mediaType in (" + media_types + ") " +
            "and Q_skill in (" + skills + ") " +
            "and Q_difficulty in (" + difficulties + ");"
    },

    getAllSkills: function (skills) {
        return "SELECT distinct Q_skill FROM textra_db.questions;"
    },

    getGroupCode: function (group_id) {
        return "SELECT GroupeCode FROM textra_db.groups where GroupId =" + group_id + ";"
    }
};