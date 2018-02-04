// Buki Roulette.
exports.run = function (message) {
    var index = Math.floor(Math.random() * BUKI_LIST.length);
    message.channel.sendMessage(message.author.username + 'は　' + BUKI_LIST[index] + 'をつかわないと　だめだぞ。');
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
