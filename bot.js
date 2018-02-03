const Discord = require('discord.js');
const client = new Discord.Client();

// models.
var jumbot_command = require('./jumbot_command');
var jumbot_reaction = require('./jumbot_reaction');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.author.bot) return;

  try {
    // command
    const prefix = '!';
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      jumbot_command.run(client, message, command, args);
      return;
    }

    // reaction
    jumbot_reaction.run(client, message);

  } catch (e) {
    channel.sendMessage('えらーが　おきたぞ。\n' + e);
  }
});

client.login(process.env.BOT_TOKEN);
