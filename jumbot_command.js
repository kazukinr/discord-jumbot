const Discord = require('discord.js');

// models.
const commands = [
    require('./command/buki_roulette'),
    require('./command/kari_roulette'),
    require('./command/mhw_nikushitsu'),
    require('./command/emoji')
]

exports.run = function (client, message, command, args) {
    if (command == 'help') {
        help(message);
        return;
    }

    for (var i = 0; i < commands.length; i++) {
        if (command == commands[i].command) {
            if (args.length == 1 && (args[0] == 'help' || args[0] == '-h')) {
                const embed = new Discord.RichEmbed()
                    .setTitle(command)
                    .setDescription(commands[i].help);
                message.channel.sendEmbed(embed);
            } else {
                commands[i].run(client, message, args);
            }
            return;
        }
    }

    message.channel.sendMessage(command + '　のこまんどは　しらないぞ。');
}

function help(message) {
    var embed = new Discord.RichEmbed()
    for (var i = 0; i < commands.length; i++) {
        embed = embed.addField(
            commands[i].command,
            commands[i].help + '\n'
        );
    }
    message.channel.sendEmbed(embed);
}
