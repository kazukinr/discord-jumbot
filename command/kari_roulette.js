// Kari Roulette.
const monster_info = require('../json/monster_info.json');
const keys_all = Object.keys(monster_info);
const keys_default = keys_all.filter(function (key) {
    return monster_info[key].ignore != true;
});

exports.command = 'kari';

exports.help = '!kari : らんだむで　もんすたーを　えらぶぞ。どすけいは　でないぞ。\n'
    + '!kari all | -a : すべての　もんすたーから　えらぶぞ。';

exports.run = function (client, message, args) {
    if (args.length > 0 && (args[0] == 'all' || args[0] == '-a')) {
        choose(message, keys_all);
    } else {
        choose(message, keys_default);
    }
}

function choose(message, keys) {
    const index = Math.floor(Math.random() * keys.length);
    message.channel.sendMessage(monster_info[keys[index]].name + 'を　かろう。');
}
