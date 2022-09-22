const jwt = require("jsonwebtoken");


const jwtTokenGenerator = async (email, password) => {
    return new Promise(function (resolve, reject) {
        try {
            var token = jwt.sign({
                data: {"email": email, "password": password}
            }, 'secret', {expiresIn: '1d'});
            resolve(token);
        } catch (e) {
            reject(Failure(e.message));
        }
    });
}

const jwtTokenVerifier = (token) => {
    return new Promise(function (resolve, reject) {
        try {
             jwt.verify(token, 'secret',function(err, decoded){
               if(err){
                   reject(Failure(err.message));
               }else{
                   //console.log(decoded.data.email)
                   resolve("done");
               }
            });

        } catch (e) {
            reject(Failure(e.message));
        }
    });
}


module.exports = {jwtTokenGenerator, jwtTokenVerifier};