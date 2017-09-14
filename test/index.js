const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const config = require('./config/mail.json');

const stmpRunner = {

    run: function() {

        const smtp = config.SMTP;

        const user = smtp.auth.user;
        const pass = smtp.auth.password;
        // const {user, password: pass} = stmp.auth;

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
            subject: 'Nodemailer 테스트',
            text: '평문 보내기 테스트 '
        };

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error)
            }
            console.log('Message %s sent: %s', info.messageId, info.response)
        });
    }
};

module.exports = stmpRunner;