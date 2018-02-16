// Sord Master.
exports.isTarget = function (message) {
    return /ソードマスター/.test(message.content);
}

exports.run = function (client, message) {
    message.channel.sendMessage(REACTIONS[Math.floor(Math.random() * REACTIONS.length)]);
}

const REACTIONS = [
    'うむ',
    '承知',
    'あれは必ず来る。不穏の音よ。',
    '某もゆこう。',
    'いざ',
    'これいかに。',
    '正念場よ',
    '見慣れた相手とて、気を締めよ。',
    'より良き装備が、今のそなたを助けよう。'
]
