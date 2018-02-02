const Discord = require('discord.js');
const client = new Discord.Client();

// models.
var reaction = require('./jumbot_reaction');
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

  try {
    var args = message.content.match(/^jumbot (.+)$/);
    if (args != null && args.length == 2) {
      channel.sendMessage(command.execute(author.username, args[1]));
      return;
    }

    var generated = reaction.execute(author.username, message.content);
    if (generated != null) {
      channel.sendMessage(generated);
      return;
    }
    
  } catch (e) {
    channel.sendMessage('えらーが　おきたぞ。\n' + e);
  }
});

client.login(process.env.BOT_TOKEN);
