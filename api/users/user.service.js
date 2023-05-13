const pool = require("../../config/database");

module.exports = {

    createUser: (data, callBack) => {
        pool.query(

            `insert into users(fname, lname, email, password, gender, phone)
                                values(?,?,?,?,?,?)`,

            [
                data.fname,
                data.lname,
                data.email,
                data.password,
                data.gender,
                data.phone
            ],
            (error, results, fields) => {
                if(error) {

                    return callBack(error)
                }

                return callBack(null, results)
            }
        );
    },

    getUsers: callBack => {
        pool.query (

            `select id,fname,lname,email,gender,country_code,phone,activated,active,tier,dp from users`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getUserByUserId: (id, callBack) => {

        pool.query(
            `select fname,lname,email,gender,country_code,phone,activated,active,tier,dp from users where id = ?`,
            [id],
            (error, results, fields) => {

                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

    updateUser: (data, callBack) => {
        pool.query(
            `update users set fname=?, lname=?, email=?, password=?, gender=?, phone=? where id = ?`,
            [
                data.fname,
                data.lname,
                data.email,
                data.password,
                data.gender,
                data.phone,
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                  return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `delete from users where id = ?`,
            [data.id],
            (error, results, fields) => {
                if(error) {
                   return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    }

};