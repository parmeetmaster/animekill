
const Failure=require('../../models/core_models/failure_model')
var admin = require("firebase-admin");
var serviceAccount = require("../../assets/animekill-4439c-firebase-adminsdk-ytodb-1d15f90c57.json");





const BUCKET_NAME= 'gs://animekill-4439c.appspot.com';


const fireBaseConfig={
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET_NAME,
    bucketName: BUCKET_NAME,
};

//ADMIN INIT
admin.initializeApp(fireBaseConfig);

var bucket = admin.storage().bucket();


const firebaseBucketAddImage = async (image,name) => {
    bucket.deleteFiles()
}



const firebaseMessenging = async (title,description,imageUrl) => {

    const registrationToken = 'dpAWOdDRQveJoMW-2TJNZe:APA91bFFAs6B3iIrMbAAoMplHxWnUjtgT0cqVG9-D2zK0wd_1JbiNSVcOmCVvN-iZh4ToCyNhxdlkfZTx56WDTVKfiIh86EK3LwQqSuJAnnXrRUxm6suLkcUaub9UfN6W_E0gFy4htyy';

    const test_image="https://m.media-amazon.com/images/M/MV5BNWU4YjJjMjgtMjMwOS00NDNjLTk5Y2YtZjdiZGUxZjQ1YTY1XkEyXkFqcGdeQXVyNTY4MjkyOTk@._V1_.jpg";

    const message = {
        notification: {
            title: 'Sparky says hello!',
            body:"Watch btth episode 12"
        },
        android: {
            notification: {
                imageUrl: test_image
            }
        },
        data: {
            "score": "madarchod",
            "time": "15:10"
        },
        apns: {
            payload: {
                aps: {
                    'mutable-content': 1
                }
            },
            fcm_options: {
                image: test_image
            }
        },
        webpush: {
            headers: {
                image: test_image
            }
        },
        topic:"anime"
      //  token: registrationToken
    };


    return await new Promise(function (resolve, reject) {
        admin.messaging().send(message).then((response) => {
            console.log('Successfully sent message:', response);
            resolve(response)
        })
            .catch((error) => {
                reject(new Failure(error.message()))

                console.log('Error sending message:', error);
            })

    })
}



module.exports = {firebaseMessenging:firebaseMessenging,}