// Nazeda.
exports.isTarget = function (message) {
    return /なぜだ[。！？\!\?]*/.test(message.content);
}

exports.run = function (message) {
    message.channel.sendMessage('坊やだからさ。');
}
