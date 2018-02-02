const Discord = require('discord.js');
const client = new Discord.Client();

// models.
var iizo = require('./message/iizo');
var command = require('./jumbot_command')

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var channel = message.channel;
  var author = message.author;
  if (author.id === client.user.id) {
    return;
  }

  if (/いいぞ/.test(message.content)) {
    channel.sendMessage(iizo.execute());
    return;
  }

  var args = message.content.match(/^jumbot (.+)$/);
  if (args.length == 2) {
    channel.sendMessage(command.execute(author.username, args));
    return;
  }
});

client.login(process.env.BOT_TOKEN);
