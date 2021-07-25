const Query = require('../models/Query')
const nodemailer = require('nodemailer')


// var transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com", // hostname
//     secureConnection: false, // TLS requires secureConnection to be false
//     port: 587, // port for secure SMTP
//     tls: {
//        ciphers:'SSLv3'
//     },
//     auth: {
//         user: '190031861@kluniversity.in',
//         pass: '#Aditya12'
//     }

// });



  

const createQuery =  (req,res) => {

    const body = req.body

    if(!body)
    {
        return res.status(404).json({
            success:false,
            message: 'Error Occured'
        })
    }

    const query =  Query(body)

    // var mailOptions = {
    //     from: '190031861@kluniversity.in', // sender address (who sends)
    //     to: query.email, // list of receivers (who receives)
    //     subject: 'Valorant', // Subject line
    //     text: 'Hello world ', // plaintext body
    //     html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
    // };
    
    // transporter.sendMail(mailOptions, function(error, info){
    //     if(error){
    //         return console.log(error);
    //     }
    
    //     console.log('Message sent: ' + info.response);
    // });

    if(!query)
    {
        return res.status(404).json({
            success: false,
            message: 'Query Cannot Be Created'
        })
    }

    
  query.save()
    .then(() => {
        return res.status(200).json(
            {
                success: true,
                _id:query._id,
                message: 'Query Submitted SuccessFully'
                
            }
           
        )
    })
    .catch((err)=> {
        return res.status(404).json({
            success: false,
            error : err
        })
    })




}


module.exports = { createQuery }