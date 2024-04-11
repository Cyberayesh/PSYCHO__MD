/**

* @project_name PSYCHO-MD
* @authors PSYCHO_BABA
* @description The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier
© 2024 PSYCHO_BABA. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Enter your session-id",
BOT_NUMBER: process.env.BOT_NUMBER || "Enter your botnumber (without + mark and spaces)",
PASSWORD: process.env.PASSWORD || "Enter you like password",
GITHUB_USERNAME: process.env.GITHUB_USERNAME || "Enter your github username",
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "Enter your GITHUB_AUTH_TOKEN"
};
