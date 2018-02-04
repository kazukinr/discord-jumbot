// models.
const buki_roulette = require('./command/buki_roulette');
const kari_roulette = require('./command/kari_roulette');

exports.run = function (client, message, command, args) {
    if (command == 'buki') {
        buki_roulette.run(message);
    } else if (command == 'kari') {
        kari_roulette.run(message);
    } else {
        message.channel.sendMessage(command + '　のこまんどは　しらないぞ。');
    }
}
