
const functions= require("firebase-functions")
const nodemailer = require('nodemailer')
exports.sendEmailNotification= functions.https.onRequest((req,res)=>{
  const email = req.body.email
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'mailtest609@gmail.com',
            pass: 'Mailtest123456@'
        }
    });
    let mailoptions = {
        from :'mailtest609@gmail.com',
        to:`muhammadaliabbasi1997@gmail.com`,
        subject:'Your submission Info',
        text:`Hi shuaib a new user just signup in to https://proje-f1d38.web.app with  email: ${email}`
        }
transporter.sendMail(mailoptions,function(err,data) {
    if (err) {
        res.send(err)
    } else {
        res.send('mail sent',email,data)
    }
})
})