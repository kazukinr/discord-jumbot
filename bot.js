const Discord = require('discord.js');
const client = new Discord.Client();

// models.
var jumbot_command = require('./jumbot_command')

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  try {
    if (message.author.bot) return;

    // command
    const prefix = '!';
    if (message.content.startsWith(prefix)) {
      message.channel.sendMessage('テスト中。');
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      message.channel.sendMessage('こまんど：${command}, ぱらめーた：${args}');
    }

  } catch (e) {
    channel.sendMessage('えらーが　おきたぞ。\n' + e);
  }
});

client.login(process.env.BOT_TOKEN);
