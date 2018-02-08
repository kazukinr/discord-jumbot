const Discord = require('discord.js');
const client = new Discord.Client();

// models.
const jumbot_command = require('./jumbot_command');
const jumbot_reaction = require('./jumbot_reaction');

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
  const general = member.guild.channels.find("name", "general");
  if (general != null) {
    general.sendMessage('ようこそ、' + member.user.username + '。\nワンポイントレッスンをはじめるぞ。');
  }
});

client.on("emojiCreate", emoji => {
  const general = emoji.guild.channels.find("name", "general");
  if (general != null) {
    general.sendMessage('えもじが　ついかされたぞ。\n' + emoji.toString() + '  :' + emoji.name + ':');
  }
});

client.on("emojiUpdate", emoji => {
  const general = emoji.guild.channels.find("name", "general");
  if (general != null) {
    general.sendMessage('えもじが　こうしんされたぞ。\n' + emoji.toString() + '  :' + emoji.name + ':');
  }
});

client.login(process.env.BOT_TOKEN);
