// models.
var iizo = require('./message/iizo');

exports.execute = function (username, content) {
    if (/いいぞ/.test(content)) {
        return iizo.execute();
    }
}
