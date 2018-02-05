// Middle Finger.
exports.isTarget = function (message) {
    return message.content.indexOf('🖕') >= 0;
}

exports.run = function (client, message) {
    const jumbot_emoji = client.emojis.find("name", "jumbot");
    if (jumbot_emoji != null) {
        message.channel.sendMessage('🖕' + jumbot_emoji.toString() + '🖕')
    }
}
