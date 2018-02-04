// models.
const iizo = require('./reaction/iizo');
const dounaru = require('./reaction/dounaru');

exports.run = function (client, message) {

    if (/いいぞ/.test(message.content)) {
        iizo.run(message);
    } else if (/どうなる[。？\?]*$/.test(message.content)) {
        dounaru.run(message);
    }
}
