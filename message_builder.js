const BukiRoulette = require('./command/buki_roulette')
const bukiRoulette = new BukiRoulette();


var MessageBuilder = function() {

    this.execute = function(sender, args) {
        switch(args[0]) {
            case 'buki':
                return bukiRoulette(sender);
                break;
            default:
                return 'そんな　コマンドは　ないぞ。'
        }
    }
}

module.exports = MessageBuilder;
