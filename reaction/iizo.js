// Iizo.
exports.isTarget = function (message) {
    return /いいぞ/.test(message.content);
}

exports.run = function (client, message) {
    message.channel.sendMessage(buildMessage());
}

function buildMessage() {
    const rand = Math.floor(Math.random() * 10);
    if (rand < 3) {
        return 'いいぞ。';
    }
    if (rand < 5) {
        return 'もっと　がんばらないと　だめだぞ。';
    }
    if (rand < 6) {
        return 'いちりゅうの　ごるふぁーに　なれ';
    }
    if (rand < 7) {
        return 'もうめんどうみきれないよ。でも　あきらめちゃだめだぞ。';
    }
    var rareIndex = Math.floor(Math.random() * RARE_REACTIONS.length);
    return RARE_REACTIONS[rareIndex];
}

const RARE_REACTIONS = [
    'うが　いいんじゃないかな。',
    'うみから　うとう。',
    'うみきれないよ。',
    'かくかあ　きいて　くれなくちゃ　あと゛は゛いすのしようか゛',
    'かぜのきも　うとう。',
    'かぜを　つかおう。',
    'きがえよう。',
    'きがじゃまなの。',
    'きがじゃまなので　えーい',
    'きがじゃまなので　かったぞ。',
    'すぴーど　すぴーど　すぴーど',
    'だめでとうございます。',
    'ちょくせつ　ぐんか。3009000',
    'ちょくせつかおう。',
    'ちょくせに。',
    'で　　り',
    'ないよ。',
    'なかたにねらいをさだめて　うとう。',
    'なぞ。',
    'なにを　かんがえよう。',
    'なんとたこに　た゛したほうがいいそ゛。',
    'なんどな',
    'なんどめ',
    'なんども　きをよけてうとう。むり',
    'なんどもお。',
    'なんともすの゛てるてる',
    'なんな',
    'はつよめに。',
    'ぷにけられる。',
    'むう　ら　うとう。',
    'むこを',
    'むらか',
    'むらから　うとう。',
    'もうかくす。',
    'もうめすて。',
    'もうめんど　はよ',
    'もうめんどうみきれよう。',
    'もすに33yだからPWをつかおう。',
    'もっとはやく　きいたな。',
    'もっとはやく　きいて　くれなくちゃ　あ　れ゛　をつかおう。',
    'もっとはやく　きいて　くれん゛',
    'もっとはやく　きいてくれなくちゃ　あとめし',
    'もっとはやく　き゛か゛',
    'もっとはやくきたな。0000000',
    'もっとはやくたな。　をつかおう。',
    'もっとはやめし。',
    'もっとはやれ゛。',
    'もめし。',
    'もんとに。',
    'もんと゛もおなし゛　こな',
    'も゛か。',
    'やく　きいてくれなくちゃ　あどは'
];
