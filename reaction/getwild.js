// Getwild.
exports.isTarget = function (message) {
    return /アスファルト|タイヤを切|暗闇走り抜ける|getwild/.test(message.content);
}

exports.run = function (client, message) {
    if (message.member.voiceChannel)
    {
        message.member.voiceChannel.join().then( connection => {
            message.channel.sendMessage('げっと わいるど をながすぞ');
            const dispatcher = connection.playFile('getwild.mp3');
            dispatcher.on('end', reason => {
                message.channel.sendMessage('おんがくが おわったぞ');
                connection.disconnect();
            });
        })
        .catch(console.log);
        return;
    }
}
