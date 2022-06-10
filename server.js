const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { Client,LegacySessionAuth  } = require('whatsapp-web.js');
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

const client = new Client({
    authStrategy: new LegacySessionAuth({
        session: sessionData
    })
});
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('authenticated', (session) => {    
    console.log(session)
})

client.on('ready', () => {
    // const arr = ['212621586010@c.us'];
    // client.sendMessage('212635362849@c.us', 'Salut Karim CV Bikher');
    console.log("Hello Form I'Am Ready");

});
    

client.initialize();