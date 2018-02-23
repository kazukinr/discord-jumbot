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
    'より良き装備が、今のそなたを助けよう。',
    '新しきものはよう分からん故。',
    '某も荒地を探し歩いた。鋭き爪、焼け焦げの跡。',
    '若き頃、国元で幾度か対峙し　この鎧に傷をつけた、かの相手を思い出すな。',
    '当時、某には好敵手が2人おり、日々、競わんばかりに研鑽に明け暮れた。',
    'フ・・・懐かしき。',
    'なんと。導蟲は、古龍の痕跡に常と異なる反応を見せると？',
    'なんと。よう分からぬ。',
    '導蟲のように新しきものは、よう分からぬ。',
    '蟻塚そびえる荒地に　古龍の痕跡を探しにゆくか。',
    'さて、何が待つ。'
]
