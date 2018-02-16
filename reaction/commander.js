// Commander.
exports.isTarget = function (message) {
    return /総司令/.test(message.content);
}

exports.run = function (client, message) {
    message.channel.sendMessage(REACTIONS[Math.floor(Math.random() * REACTIONS.length)]);
}

const REACTIONS = [
    'これより　きんきゅうさくせんかいぎを　はじめるぞ',
    'ぐたいてきなしじは　げんばでおこなうぞ',
    'みちびきの　あおいほしが　かがやかんことを'
]
