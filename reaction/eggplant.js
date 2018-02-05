// Eggplant.
exports.isTarget = function (message) {
    return message.content.indexOf('🍆') >= 0
        || /なす|ナス|茄子/.test(message.content);
}

exports.run = function (message) {
    message.channel.sendMessage('(っ’ヮ’)╮-=ﾆ= 三≡’,;’;🍆');
}
