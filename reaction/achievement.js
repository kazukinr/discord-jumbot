const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const MONGODB_URI = process.env.MONGODB_URI
const __SPLIT_URI = MONGODB_URI.split('/')
const DB_NAME = __SPLIT_URI[__SPLIT_URI.length-1]

// Commander.
exports.isTarget = function (message) {
    return /([^-+]+)(\+\+|\-\-)/.test(message.content);
}

exports.run = function (client, message) {
    var result = message.content.match(/([^-+]+)(\+\+|\-\-)/);
    if(!result) { return; }

    let name = result[1];
    let operator = result[2];
    let delta = operator === '++' ? 1 : -1;

    let user = client.users.find('username', name);
    if(user) {
        (async function() {
            let mongo_client = null;
            try {
                const client = mongo_client = await MongoClient.connect(process.env.MONGODB_URI);
                let db = client.db(DB_NAME);
                const users = await db.collection("users");
                let word;
                if(delta > 0) {
                    word = 'いいぞ';
                } else if(Math.floor(Math.random(9)*10) == 0) {
                    // 10%でおまけします
                    delta = 1;
                    word = 'たまには　おまけしてあげるね くじけちゃだめだよ。';
                } else {
                    word = 'もっと　がんばらないと　だめだぞ。';
                }

                await users.updateOne( { id: user.id }, {$inc:{achievement:delta}}, {upsert: true});
                const updated_user = await users.findOne({ id: user.id });
                message.channel.send(word + ' (' + name + ':通算' + updated_user.achievement + ')');
                mongo_client.close();
            } catch (err) {
                if(mongo_client) {
                    mongo_client.close();
                }
                console.log(err);
                message.channel.send('ばぐってるぞ');  
            }
        })();
    } else {
        message.channel.send(name + 'はいないぞ');
    }
}

process.on('unhandledRejection', console.dir);