// Nazeda.
exports.isTarget = function (message) {
    return /なぜだ[。！？\!\?]*/.test(message.content);
}

exports.run = function (client, message) {
    message.channel.sendMessage('坊やだからさ。');
}
