const functions = require('firebase-functions');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2')
const admin = require('firebase-admin');

admin.initializeApp();

exports.addAminRole = functions.https.onCall((data, context) => {
    // get the user and add custom claim
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made an admin`
        }
    }).catch(err => {
        return err;
    });
});
// var mailgun = require("mailgun-js");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.confimEmail = functions.https.onCall((request, response) => {
    let tourName = request.tourName;
    let date = request.date;
    let email = request.email;
    let ticket = request.ticket;
    let name = request.name

    var api_key = '40960b8e3e394b242a6487a4cc0e3159-2416cf28-2fbf2a7f';
    var DOMAIN = 'sandbox34a1e715a75d4cc9943d6e90f05c53e6.mailgun.org';
    var mailgun = require('mailgun-js')({
        apiKey: api_key,
        domain: DOMAIN
    });

    var data = {
        from: 'Travel <godswill@gmail.com>',
        to: `${name} <${email}>`,
        subject: `Confirmation of Your Reservation for ${tourName}`,
        html: `<html><h1>Congratulations ${name} !</h1> <br>
        Your Request to book ${tourName} On ${date} 
        with The Ticket Number: <strong>${ticket} </strong>
        <br><br><br><br>
        <h2> Cheers!!!</h2>
        </html>
        `
    };
    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
        }
        console.log(body);
    });
});

exports.declineEmail = functions.https.onCall((request, response) => {
    let tourName = request.tourName;
    let date = request.date;
    let email = request.email;
    
    let name = request.name

    var api_key = '40960b8e3e394b242a6487a4cc0e3159-2416cf28-2fbf2a7f';
    var DOMAIN = 'sandbox34a1e715a75d4cc9943d6e90f05c53e6.mailgun.org';
    var mailgun = require('mailgun-js')({
        apiKey: api_key,
        domain: DOMAIN
    });

    var data = {
        from: 'Travel <godswill@gmail.com>',
        to: `${name} <${email}>`,
        subject: `Decling Your Reservation for ${tourName}`,
        html: `<html><h1>Oops We are really ${name} !</h1> <br>
        Your Request to book ${tourName} On ${date} 
       was declined based on logistic Please we encourage you to rebook it with a different date 
       <br><br><br><br>

        <h2> We are deeply sorry for the inconvinence it may cause you!!!</h2>
        </html>
        `
    };
    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
        }
        console.log(body);
    });
});
exports.checkoutEmail = functions.https.onCall((request, response) => {
    let tourName = request.tourName;
    
    let email = request.email;

    let name = request.name

    var api_key = '40960b8e3e394b242a6487a4cc0e3159-2416cf28-2fbf2a7f';
    var DOMAIN = 'sandbox34a1e715a75d4cc9943d6e90f05c53e6.mailgun.org';
    var mailgun = require('mailgun-js')({
        apiKey: api_key,
        domain: DOMAIN
    });

    var data = {
        from: 'Travel <godswill@gmail.com>',
        to: `${name} <${email}>`,
        subject: `Thanking For Visiting ${tourName}`,
        html: `<html><h1>Hello ${name} !</h1> <br>
        Hope you had a good time at ${tourName} 
        Cheeck Out More tours <a href="">On our website</a> <br><br><br><br>
        <h2> Thanks We Really Do wish to Make Another reservation for you!!!</h2>
        </html>
        `
    };
    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
        }
        console.log(body);
    });
});

// exports.confimEmail = functions.https.onRequest((request, response) => {
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             xoauth2: xoauth2.createXOAuth2Generator({
//                 user: "cyriluket12@gmail.com",
//                 clientId: '304303818510 - 12e1 fkmqv7j0mtg9ec4uj6u0dnmkq3nd.apps.googleusercontent.com',
//                 clientSecret: ' SLbks9abmedNfaCGhhe0KEmh',
//                 refreshToken : ''
//             })
//         }
//     })
//     var data = {
//         from: 'Travel <cyriluket12@gmail.com>',
//         to: 'cyriluket12@gmail.com',
//         subject: "testin nodemailer",
//         text: "sucessfull"
//     }
//     transporter.sendMail(data, function (err,res) {
//         if (err) {
//             console.log("error",err)
//         } else {
//             console.log("email sent")
//         }
//     })
// });