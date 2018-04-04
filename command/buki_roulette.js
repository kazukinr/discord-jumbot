// Buki Roulette.
const dice_internal = require('../util/dice_internal');

exports.command = 'buki';

exports.help = '!buki : らんだむで　ぶきを　えらぶぞ。\n'
    + '!buki <数字>d<数字>: ぶきと　だいすを　ひょうじするぞ。';

exports.run = function (client, message, args) {
    const index = Math.floor(Math.random() * BUKI_LIST.length);
    let result = message.author.username + 'は　' + BUKI_LIST[index] + 'をつかわないと　だめだぞ。';

    if (args.length == 1 && dice_internal.isDiceRegex(args[0])) {
        result += '\n' + dice_internal.buildResult(args[0]);
    }
    message.channel.sendMessage(result);
}

const BUKI_LIST = [
    '大剣',
    '太刀',
    '片手剣',
    '双剣',
    'ハンマー',
    '狩猟笛',
    'ランス',
    'ガンランス',
    'スラッシュアックス',
    'チャージアックス',
    '操虫棍',
    '弓',
    'ヘビィボウガン',
    'ライトボウガン'
];
