// Middle Finger.
exports.isTarget = function (message) {
    return message.content.indexOf('💩') >= 0;
}

exports.run = function (client, message) {
    message.channel.sendMessage('ﾄﾞｩﾙﾙﾙﾙﾙﾙﾙﾙﾙ…↓↓(不穏)\n'
        + 'ﾃﾞｯ↑ﾃﾞｯ↑ﾃﾞｯ…↑ﾃﾞｰｰｰｰﾝ↓↓↓\n'
        + 'ﾄﾞｩｯｯﾄﾞｩｰｰｰｰﾄﾞｩﾃﾞｪｨﾄﾞｩﾄﾞｩﾙﾙﾙﾙﾙﾙ…\n\n'
        + '＿人人人人人人人人人人人人＿\n'
        + '＞　デ　デ　デ　デ　ン　！＜\n'
        + '￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y￣\n\n'
        + 'アォォオオオオオオーーーーンｗｗｗｗｗｗ');
}
