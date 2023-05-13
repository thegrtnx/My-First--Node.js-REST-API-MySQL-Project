const pool = require("../../config/database");

module.exports = {

    create: (data, callBack) => {
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
    }
};