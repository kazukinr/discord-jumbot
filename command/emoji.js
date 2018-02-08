// Emoji.
const Discord = require('discord.js');

exports.command = 'emoji';

exports.run = function (client, message, args) {
    const guild = message.guild;
    if (guild != null) {
        const allEmojis = guild.emojis.map(e => e.toString() + '  :' + e.name + ':').join('\n');
        const embed = new Discord.RichEmbed()
            .setTitle('このさーばーに　とうろくされている　えもじの　いちらんだぞ。')
            .setDescription(allEmojis)

        message.channel.sendEmbed(embed);
    } else {
        message.channel.sendMessage('このこまんどは　さーばーちゃんねる　せんようだぞ。');
    }
}
