// models.
var buki_roulette = require('./command/buki_roulette');

exports.execute = function (username, args) {
    if (args === 'buki') {
        return buki_roulette.execute(username);
    }


    return args + '　のおぷしょんは　しらないぞ。'
}
