// models.
const commands = [
    require('./command/buki_roulette'),
    require('./command/kari_roulette'),
    require('./command/mhw_nikushitsu'),
    require('./command/emoji')
]

exports.run = function (client, message, command, args) {
    for (var i = 0; i < commands.length; i++) {
        if (command == commands[i].command) {
            commands[i].run(client, message, args);
            return;
        }
    }

    message.channel.sendMessage(command + '　のこまんどは　しらないぞ。');
}
