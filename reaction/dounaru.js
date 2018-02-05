// Dounaru.
exports.isTarget = function (message) {
    return /どうなる[。？\?]*$/.test(message.content);
}

exports.run = function (message) {
    message.channel.sendMessage('知らんのか');
}
