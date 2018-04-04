// Kari Roulette.
const monster_info = require('../json/monster_info.json');
const keys_all = Object.keys(monster_info);
const keys_default = keys_all.filter(function (key) {
    return monster_info[key].ignore != true;
});
const dice_internal = require('../util/dice_internal');

exports.command = 'kari';

exports.help = '!kari : らんだむで　もんすたーを　えらぶぞ。どすけいは　でないぞ。\n'
    + '!kari all | -a : すべての　もんすたーから　えらぶぞ。';

exports.run = function (client, message, args) {
    let result = args.length > 0 && (args[0] == 'all' || args[0] == '-a')
        ? buildMessage(message, keys_all)
        : buildMessage(message, keys_default);

    if (args.length == 1 && dice_internal.isDiceRegex(args[0])) {
        result += '\n' + dice_internal.buildResult(args[0]);
    }
    message.channel.sendMessage(result);
}

function buildMessage(message, keys) {
    const index = Math.floor(Math.random() * keys.length);
    return monster_info[keys[index]].name + 'を　かろう。';
}
