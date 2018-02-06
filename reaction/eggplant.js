// Eggplant.
exports.isTarget = function (message) {
    return message.author.id == '409122303390253076'
        && Math.floor(Math.random() * 3) == 0;
}

exports.run = function (message) {
    message.reply('(っ’ヮ’)╮-=ﾆ= 三≡’,;’;🍆');
}
