// Dice.
exports.isDiceRegex = function (value) {
    return /^[0-9]+d[0-9]+$/.test(value);
}

exports.buildResult = function (value) {
    const params = value.match(/^([0-9]+)d([0-9]+)$/);
    if (params.length == 3) {
        const count = params[1];
        const max = params[2];

        if (count > 100) {
            return 'だいすが　おおすぎるぞ';
        }

        var result = '';
        for (var i = 0; i < count; i++) {
            if (i > 0) {
                result += '\n'
            }
            result += (Math.ceil(Math.random() * max))
        }
        return result;
    }
    return '';
}
