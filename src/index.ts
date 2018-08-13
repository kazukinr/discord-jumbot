import { Client } from 'discord.js'
const client = new Client()

client.on('ready', () => {
    console.log('I am ready!');
})

client.on('message', message => {
    if (message.author.bot) return;

    if (message.content == 'ping') {
        message.channel.sendMessage('pong');
    }
})

client.login(process.env.BOT_TOKEN);

