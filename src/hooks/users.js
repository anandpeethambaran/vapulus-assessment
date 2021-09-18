const bcrypt = require('bcrypt')

exports.hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {

            let salt = bcrypt.genSalt(10);

            let hashPassword = bcrypt.hash(password, salt);

            resolve(hashPassword);


        } catch (error) {
            reject(error)
        }
    })
}