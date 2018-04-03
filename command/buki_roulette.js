// Buki Roulette.
exports.command = 'buki';

exports.help = '!buki : らんだむで　ぶきを　えらぶぞ。\n'
    + '!buki <数字>d<数字>: ぶきと　だいすを　ひょうじするぞ。';

exports.run = function (client, message, args) {
    const index = Math.floor(Math.random() * BUKI_LIST.length);
    const result = message.author.username + 'は　' + BUKI_LIST[index] + 'をつかわないと　だめだぞ。';
    if (args.length == 1 && /^[0-9]+d[0-9]+$/.test(args[0])) {
        const params = args[0].match(/^([0-9]+)d([0-9]+)$/);
        const count = params[1];
        const max = params[2];
        if (count <= 100) {
            for (var i = 0; i < count; i++) {
                result += '\n' + (Math.ceil(Math.random() * max))
            }
        }
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
