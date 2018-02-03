// models.
var iizo = require('./reaction/iizo');

exports.run = function (client, message) {

    if (/いいぞ/.test(message.content)) {
        iizo.run(message);
    }
}
