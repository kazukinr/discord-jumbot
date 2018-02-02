const Discord = require('discord.js');
const client = new Discord.Client();

// models.
var iizo = require('./command/iizo');
var buki_roulette = require('./command/buki_roulette')

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

  if (message.content === 'jumbot buki') {
    channel.sendMessage(buki_roulette.execute(author.username));
    return;
  }
});

client.login(process.env.BOT_TOKEN);
