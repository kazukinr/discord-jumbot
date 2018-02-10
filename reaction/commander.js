// Commander.
exports.isTarget = function (message) {
    return /総司令/.test(message.content);
}

exports.run = function (client, message) {
    message.channel.sendMessage('さくせんかいぎを　はじめるぞ。');
}
