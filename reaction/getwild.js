// Getwild.
exports.isTarget = function (message) {
    return /アスファルト|タイヤを切|暗闇走り抜ける|getwild/.test(message.content);
}

exports.run = function (client, message) {
    if (message.isMemberMentioned(client.user) && message.member.voiceChannel)
    {
        message.member.voiceChannel.join().then( connection => {
            const dispatcher = connection.playFile('./audio/getwild.mp3');
            dispatcher.on('end', reason => {
                connection.disconnect();
            });
        })
        .catch(console.log);
        return;
    }
}
