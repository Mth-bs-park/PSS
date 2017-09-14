## send mail using Gmail

1. npm install
 - nodemailer-smtp-transport
 - nodemailer
 
2. gamil account 설정
 1. `my account` 클릭
 2. `sign-in & security` 클릭
 3. `Connected apps & sites`
  - `Allow less secure apps` 활성화 
 
3. simple example
```
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-stmp-transport');

const user = '[googleAccount]';
const password = '[password]';

const options = smtpTransport({
    service: 'gmail',
    auth: {
        user: `${user}@gmail.com`,
        pass: password
    }
});
const transport = nodemailer.createTransport(options);

const from = `NAME <${user}@gmail.com>`;

const mailOptions = {
    from: from,
    to: 'example1@gmail.com, exampl2@example.com',
    subject: 'subject',
    text: 'body!!'
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error)
    }
    console.log('Message %s sent: %s', info.messageId, info.response)
});

```
 
