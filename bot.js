const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var channel = message.channel;
  var author = message.author;
  if (author.id === client.user.id) {
    return;
  }
  
  if (message.content === 'iizo' || message.content === 'いいぞ' || message.content === 'いいぞ。') {
    channel.sendMessage(iizo());
    return;
  }

  if (message.content === 'jumbot buki') {
    var rand = Math.floor(Math.random() * BUKI_LIST.length);
    channel.sendMessage(buki_roulette(author.username));
  }
});

client.login(process.env.BOT_TOKEN);

// IIZO Reaction.
function iizo() {
  var rand = Math.floor(Math.random() * 20);
  if (rand < 10) {
    return 'いいぞ。';
  }
  if (rand < 15) {
    return 'もっと　がんばらないと　だめだぞ。';
  }
  if (rand < 17) {
    return 'いちりゅうの　ごるふぁーに　なれ';
  }
  if (rand < 18) {
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
  'ちょくせに。',
  'で　　り',
  'ないよ。',
  'なぞ。',
  'なにを　かんがえよう。',
  'なんとたこに　た゛したほうがいいそ゛。',
  'なんどめ',
  'なんども　きをよけてうとう。むり',
  'なんどもお。',
  'なんともすの゛てるてる',
  'はつよめに。',
  'ぷにけられる。',
  'むう　ら　うとう。',
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
  'もっとはやくたな。　をつかおう。',
  'もっとはやめし。',
  'もっとはやれ゛。',
  'もめし。',
  'もんとに。',
  'やく　きいてくれなくちゃ　あどは',
]

// Buki Roulette.
function buki_roulette(username) {
  var rand = Math.floor(Math.random() * BUKI_LIST.length);
  return username + 'は　' + BUKI_LIST[rand] + 'をつかわないと　だめだぞ。'
}
const BUKI_LIST = [
    '大剣', '太刀', '片手剣', '双剣', 'ハンマー', '狩猟笛', 'ランス', 'ガンランス', 
    'スラッシュアックス', 'チャージアックス', '操虫棍', '弓', 'ヘビィボウガン', 'ライトボウガン'
];


