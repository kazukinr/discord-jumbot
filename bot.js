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
    message.channel.sendMessage('えらーが　おきたぞ。\n' + e);
  }
});

client.on("guildMemberAdd", member => {
  const general = member.guild.channels.get('408226089828352001');
  general.sendMessage('ようこそ、' + member.user.username + '。\nワンポイントレッスンをはじめるぞ。');
});

client.login(process.env.BOT_TOKEN);
