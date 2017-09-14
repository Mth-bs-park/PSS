const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const config = require('./config/user.json');

const smtp = config.SMTP;

// const {user, password: pass} = stmp.auth;
const user = smtp.auth.user;
const pass = smtp.auth.password;

const transport = nodemailer.createTransport(smtpTransport({
    service: smtp.service,
    auth: {
        user: `${user}@gmail.com`,
        pass: pass
    }
}));

const mailOptions = {
    from: `BOT <${user}@gmail.com>`,
    to: `${config.mail.from.join(',')}`,
    subject: 'Nodemailer 테스트입니다.',
    html: '<h1>test</h1><div>test 입니다.</div>'
};

transport.sendMail(mailOptions, (error, info) => {
    
    if (error) {
        return console.log(error)
    }
    console.log('Message %s sent: %s', info.accepted, info.response)
});