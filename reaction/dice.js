// Dice.
exports.isTarget = function (message) {
    return /^[0-9]+d[0-9]+$/.test(message.content);
}

exports.run = function (client, message) {
    const params = message.content.match(/^([0-9]+)d([0-9]+)$/);
    if (params.length == 3) {
        const count = params[1];
        const max = params[2];

        if (count > 100) {
            message.channel.sendMessage('おおすぎるぞ');
            return;
        }

        var result = '';
        for (var i = 0; i < count; i++) {
            if (i > 0) {
                result += '\n'
            }
            result += (Math.ceil(Math.random() * max))
        }
        message.channel.sendMessage(result)
    }
}