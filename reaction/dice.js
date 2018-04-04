// Dice.
const dice_internal = require('../util/dice_internal');

exports.isTarget = function (message) {
    return dice_internal.isDiceRegex(message.content);
}

exports.run = function (client, message) {
    const result = dice_internal.buildResult(message.content);
    if (result != null && result.length > 0) {
        message.channel.sendMessage(result);
    }
}
