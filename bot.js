const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var channel = message.channel;
  var author = message.author;
  if (message.content === 'iizo') {
    channel.sendMessage('だめだぞ。')
  }

  if (message.content === 'jumbot buki') {
    var rand = Math.floor(Math.random() * BUKI_LIST.length);
    channel.sendMessage(buki_roulette(author.username));
  }
});

client.login(process.env.BOT_TOKEN);


// Buki Roulette.
function buki_roulette(username) {
  var rand = Math.floor(Math.random() * BUKI_LIST.length);
  return username + 'は　' + BUKI_LIST[rand] + 'をつかわないと　だめだぞ。'
}

const BUKI_LIST = [
    '大剣', '太刀', '片手剣', '双剣', 'ハンマー', '狩猟笛', 'ランス', 'ガンランス', 
    'スラッシュアックス', 'チャージアックス', '操虫棍', '弓', 'ヘビィボウガン', 'ライトボウガン'
];


