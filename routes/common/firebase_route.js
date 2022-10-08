var express = require('express');
const compression=require('compression')
const saltedMd5=require('salted-md5')
const path=require('path');

const {performLogin} = require("../../bin/authentication/authentication");
var firebaseRoute = express.Router();
const {handleFailure} = require("../../utils/response_handle_utils/response_handle_utils");
const {handleSuccess} = require("../../utils/response_handle_utils/response_handle_utils");
var admin = require("firebase-admin");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

var serviceAccount = require("../../assets/animekill-4439c-firebase-adminsdk-ytodb-1d15f90c57.json");


const BUCKET_NAME= 'gs://animekill-4439c.appspot.com';





const fireBaseConfig={
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET_NAME,
    bucketName: BUCKET_NAME,
};

//ADMIN INIT
admin.initializeApp(fireBaseConfig);

const bucket=admin.storage().bucket();


firebaseRoute.post('/sentNotification', async function (req, res) {


    const registrationToken = 'ffx9zCplQ_6EPZFFNhLI4A:APA91bHaBMLmGY6dQyylACgpe4MfOz8ojocw59RkF73QqwXuSFqYLxyJwyZ_dJSrYTtlb_IRgP0CpOU3o4i0-AZQfflhNsxhx4FXt1QERgR82jN-M7y4Q9OVIMJzko3QMC6ZUzx_JRq4';

    const test_image="https://m.media-amazon.com/images/M/MV5BNWU4YjJjMjgtMjMwOS00NDNjLTk5Y2YtZjdiZGUxZjQ1YTY1XkEyXkFqcGdeQXVyNTY4MjkyOTk@._V1_.jpg";

    const message = {
        notification: {
            title: req.body.title,
            body:req.body.body
        },

        android: {

            notification: {
                imageUrl:req.body.image
            }
        },

        data: req.body.notification_data,
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


     await new Promise(function (resolve, reject) {
        admin.messaging().send(message).then((response) => {
            console.log('Successfully sent message:', response);
          res.json(handleSuccess("Notication succeeed",res.path,{}))
        })
            .catch((error) => {
                handleFailure("Notification failed",res.path)


                console.log('Error sending message:', error);
            })

    })

});



firebaseRoute.post('/upload_files' ,upload.array("files"),async function (req, res) {
      console.log(req.body);
      console.log(req.files);

   return;
    const name = saltedMd5(req.files[0].filename, 'SUPER-S@LT!')
    const fileName = name + path.extname(req.files[0].originalname)
    await app.locals.bucket.file(fileName).createWriteStream().end(req.files[0].buffer)
    res.send('done');
});






module.exports = firebaseRoute;
