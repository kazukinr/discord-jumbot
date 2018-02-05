// models.
const iizo = require('./reaction/iizo');
const dounaru = require('./reaction/dounaru');
const nazeda = require('./reaction/nazeda');
const middle_finger = require('./reaction/middle_finger');
const eggplant = require('./reaction/eggplant');

exports.run = function (client, message) {

    if (iizo.isTarget(message)) {
        iizo.run(message);
    } else if (dounaru.isTarget(message)) {
        dounaru.run(message);
    } else if (nazeda.isTarget(message)) {
        nazeda.run(message);
    } else if (middle_finger.isTarget(message)) {
        middle_finger.run(client, message);
    } else if (eggplant.isTarget(message)) {
        eggplant.run(message);
    }
}
