// Buki Roulette.
exports.run = function (message) {
    var rand = Math.floor(Math.random() * BUKI_LIST.length);
    message.channel.sendMessage(message.author.username + 'は　' + BUKI_LIST[rand] + 'をつかわないと　だめだぞ。');
}

const BUKI_LIST = [
    '大剣', '太刀', '片手剣', '双剣', 'ハンマー', '狩猟笛', 'ランス', 'ガンランス',
    'スラッシュアックス', 'チャージアックス', '操虫棍', '弓', 'ヘビィボウガン', 'ライトボウガン'
];
