// models.
var buki_roulette = require('./command/buki_roulette');
var help = require('./command/help');

exports.execute = function (username, args) {
    if (args === 'buki') {
        return buki_roulette.execute(username);
    }
    if (args === 'help') {
        return help.execute();
    }

    return args + '　のこまんどは　しらないぞ。'
}
