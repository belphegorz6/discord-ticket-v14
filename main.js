const { Client, Intents } = require('discord.js');


global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login(client.config.dsc.token);

client.on('ready' , () =>{
    console.log('bot online');
    client.user.setStatus('dnd');

   
    console.log('bot status', client.user.presence.status);
   
   
   });