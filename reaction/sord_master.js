// Sord Master.
exports.isTarget = function (message) {
    return /ソードマスター/.test(message.content);
}

exports.run = function (client, message) {
    message.channel.sendMessage('御意');
}
