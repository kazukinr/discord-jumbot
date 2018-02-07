// models.
const reactions = [
    require('./reaction/iizo'),
    require('./reaction/dounaru'),
    require('./reaction/nazeda'),
    require('./reaction/middle_finger'),
    require('./reaction/eggplant'),
    require('./reaction/sord_master')
]

exports.run = function (client, message) {
    for (var i = 0; i < reactions.length; i++) {
        if (reactions[i].isTarget(message)) {
            reactions[i].run(client, message);
            return;
        }
    }
}
