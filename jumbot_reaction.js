// models.
var iizo = require('./message/iizo');
var random = require('./message/random')

exports.execute = function (username, content) {
    if (/いいぞ/.test(content)) {
        return iizo.execute();
    }
    
    return random.execute();
}
