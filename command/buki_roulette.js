const BUKI_LIST = [
    '大剣', '太刀', '片手剣', '双剣', 'ハンマー', '狩猟笛', 'ランス', 'ガンランス', 
    'スラッシュアックス', 'チャージアックス', '操虫棍', '弓', 'ヘビィボウガン', 'ライトボウガン'
];

var BukiRoulette = function() {

    this.execute = function(sender){
        var rand = Math.floor(Math.random(BUKI_LIST.length));
        return sender + 'は　' + BUKI_LIST[rand] + 'を　つかわないと　だめだぞ。'
    }
}

module.exports = BukiRoulette;
