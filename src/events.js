const express = require('express');
var nodemailer = require('nodemailer');

// var io = require("socket.io")(http);
// io.onconnection("connection", function(socket) {
//     console.log("User Connected", socket.id)

//     socket.on("new_message", function(data) {
//         console.log("Client Says ::", data);
//     })
// });


function createRouter(db) {
    const router = express.Router();
    const owner = '';
    // the routes are defined here
    router.get("/", function(request, result) {
        result.send("Hello World");
    });
    router.get('/event', (req, res, next) => {
        db.query(
            'Select * from BOOKING',
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    // res.status(200).json({ status: 'ok' });
                    res.status(200).json(results);
                    console.log("Retrieved Booking Data" + JSON.stringify(results));
                }
            }
        );
    });

    router.get('/crops', (req, res, next) => {
        db.query(
            'Select * from crops',
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    // res.status(200).json({ status: 'ok' });
                    res.status(200).json(results);
                    console.log("Retrieved Crops Data" + JSON.stringify(results));
                }
            }
        );
    });

    router.get('/crops_by_id/:id', (req, res, next) => {
        var id = req.params.id;
        db.query(
            'Select * from crops where id = ?', id,
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    // res.status(200).json({ status: 'ok' });
                    res.status(200).json(results);
                    console.log("Retrieved Crops Data" + JSON.stringify(results));
                }
            }
        );
    });

    router.post('/account_data', (req, res, next) => {
        var data = req.body;
        console.log("Data :=" + data);
        db.query(
            'Insert into accounts SET ?', data,
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'Error' });
                } else {
                    // res.status(200).json({ status: 'ok' });
                    res.status(200).json(results);
                    console.log("Entering Registration  Data" + JSON.stringify(results));
                }
            }
        );
        console.log("Email id :==" + data.email)
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'open.project19@gmail.com',
                pass: 'Qwerty@123'
            }
        });

        var mailOptions = {
            from: 'open.project19@gmail.com',
            fromname: 'Farmers-App',
            to: data.email,
            subject: 'Congratulations you have succesfully Registered',
            text: 'Username is : ' + data.username + '\n password is  : ' + data.password + ' \n Role:' + data.role
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });

    router.get('/get_account/data/:email/:password/:type', (req, res, next) => {
        var email = req.params.email;
        var password = req.params.password;
        var type = req.params.type;
        // var data = req.body;
        console.log("Data :=" + email, password, type);
        db.query(
            'Select email,password,role from accounts where email = ?', email,
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'Error' });
                } else {
                    // res.status(200).json({ status: 'ok' });
                    res.status(200).json(results);
                    console.log("Retrieved User Details :: " + JSON.stringify(results));
                }
            }
        );
    });


    router.post('/product_data', (req, res, next) => {
        var data = req.body;
        console.log("Data :=" + data);
        db.query(
            'Insert into crops SET ?', data,
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'Error' });
                } else {
                    // res.status(200).json({ status: 'ok' });
                    res.status(200).json(results);
                    console.log("Entering Crops  Data" + JSON.stringify(results));
                }
            }
        );
        // console.log("Email id :==" + data.email)
        // var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'open.project19@gmail.com',
        //         pass: 'Qwerty@123'
        //     }
        // });

        // var mailOptions = {
        //     from: 'open.project19@gmail.com',
        //     fromname: 'Farmers-App',
        //     to: data.email,
        //     subject: 'Sending Email using Node.js',
        //     text: 'Username is : ' + data.username + '\n password is  : ' + data.password
        // };

        // transporter.sendMail(mailOptions, function(error, info) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // });
    });


    return router; //get_account_data/
}
module.exports = createRouter;