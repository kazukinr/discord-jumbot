// models.
var buki_roulette = require('./command/buki_roulette');

exports.run = function (client, message, command, args) {
    if (command == 'buki') {
        buki_roulette.run(message);
    } else {
        message.channel.sendMessage(command + '　のこまんどは　しらないぞ。');
    }
}
