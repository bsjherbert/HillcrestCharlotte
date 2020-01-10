const connCardController = require("express").Router();
const sgMail = require("@sendgrid/mail");
const db = require("../../models");

connCardController.post("/", (req, res) => {

  db.ConnCard.create(req.body).then(cc => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "lbernadel7@gmail.com",
      from: {
        name: "Hillcrest Connection Card - Online",
        email: "connection@hillcrestcharlotte.com"
      },
      subject: "New Connection Card!",
      text: `dateCreated: ${req.body.dateCreated}\n
            name: ${req.body.name}\n
            address: ${req.body.address.street}\n
                    ${req.body.address.other}\n
                    ${req.body.address.city}, ${req.body.address.state} ${req.body.address.zip}\n
            email: ${req.body.email}\n
            phone: ${req.body.telephone}\n
            contactMethod: ${req.body.contactMethod}\n
            speakPastor: ${req.body.speakPastor}\n
            moreInfo: ${req.body.moreInfo}\n
            questions: ${req.body.questions}\n`
    }

    sgMail.send(msg)
    .then(() => {
      console.log('Mail sent successfully')
      res.json(cc)
    })
    .catch(error => console.error(error.toString()));;
    
  }).catch(err => res.json(err));
});

module.exports = connCardController;
