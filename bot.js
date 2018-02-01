const Discord = require('discord.js');
const client = new Discord.Client();

const MessageBuilder = require('./message_builder');
const messageBuilder = new MessageBuilder();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => { 
  var sender = message.sender.name;
  var channel = message.channel;

  if (message.content === 'いいぞ' || message.content === 'いいぞ。') {
    channel.sendMessage('いいぞ。');
    return;
  }

  if (message.content.startsWith('jumbot ')) {
    var args = message.content.split(' ');
    if (args.length == 1) {
      channel.sendMessage('ようもないのに　よんだら　だめだぞ。')
    }
    channel.sendMessage(messageBuilder.execute(sender, args));   
  }
});

client.login(process.env.BOT_TOKEN);
