// Kari Roulette.
exports.command = 'kari';

exports.run = function (client, message, args) {
    if (Math.floor(Math.random() * 30) == 0) {
        // muri
        message.channel.sendMessage(
            MONSTER_MURI_LIST[Math.floor(Math.random() * MONSTER_MURI_LIST.length)]
            + 'を　かろう。むり'
        );
    } else {
        // normal
        message.channel.sendMessage(
            MONSTER_LIST[Math.floor(Math.random() * MONSTER_LIST.length)]
            + 'を　かろう。'
        );
    }
}

const MONSTER_LIST = [
    'アンジャナフ',
    'ヴァルハザク',
    'ヴォルガノス',
    'ウラガンキン',
    'オドガロン',
    'キリン',
    'クシャルダオラ',
    'クルルヤック',
    'ジュラトドス',
    'ツィツィヤック',
    'ディアブロス',
    'ディアブロス亜種',
    'テオ・テスカトル',
    'ドスギルオス',
    'ドスジャグラス',
    'ドドガマル',
    'トビカガチ',
    'ネルギガンテ',
    'パオウルムー',
    'バザルギウス',
    'プケプケ',
    'ボルボロス',
    'ラドバルキン',
    'リオレイア',
    'リオレイア亜種',
    'リオレウス',
    'リオレウス亜種',
    'レイギエナ'
];

const MONSTER_MURI_LIST = [
    'イビルジョー',
    'ゼノ・ジーヴァ',
    'ゾラ・マグダラオス'
];
