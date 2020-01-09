const connCardController = require("express").Router();
const sgMail = require("@sendgrid/mail");
const db = require("../../models");

connCardController.post("/", (req, res) => {
  console.log(req.body);
  db.ConnCard.create(req.body)
    .then(cc => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: "bsjherbert@gmail.com",
        from: "connect@hillcrestcharlotte.com",
        subject: "New Connection Card!",
        text: `dateCreated: ${req.body.dateCreated}\n
               name: ${req.body.name}\n
               address: ${req.body.address.street}\n
                        ${req.body.address.other}\n
                        ${req.body.address.city}, ${req.body.address.state} ${req.body.address.zip}\n
               email: ${req.body.email}\n
               phone: ${req.body.telephone}\n
               contactMethod: ${req.body.telephone}\n
               speakPastor: ${req.body.speakPastor}\n
               moreInfo: ${req.body.moreInfo}\n
               questions: ${req.body.questions}\n`
      };
      sgMail.send(msg);
      res.json(cc);
    })
    .catch(err => res.json(err));
});

module.exports = connCardController;
