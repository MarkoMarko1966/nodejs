const fs = require('fs');
const Mailgun = require('mailgun.js');
const formData = require('form-data');
const Validator = require('./validate');

const send = async (template, data) => {
    if(!validator[template]) {
        throw 'Validation schema does not exist for the given template.';
    };

    validator.validate(data, validator[template]);
    let templatePath = `${__dirname}/../../emailtemplates/${template}.html`;
    if(!fs.existsSync(templatePath)){
        throw 'Template does not exist!';
    }

    let tmpl = fs.readFileSync(templatePath, 'utf8');
    let html = parseTemplate(tmpl, data);
    const mailgun = new Mailgun(formData);
    const mg_user = mailgun.client{
        username: process.env.MAILGUN_USERNAME,
    }
};

const parseTemplate = (template,data) => {
    for(let d in data) {
        let regex = new RegExp(`\{/{${d}\}\}`, 'g');
        template = template.replace(regex, data[d])
    }

    return template;
};