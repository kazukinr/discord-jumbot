// MHW nikushitsu.
const Discord = require('discord.js');
const fs = require('fs');

const monster_key = require('../util/monster_key');
const monster_info = require('../json/monster_info.json');

exports.command = 'niku';

exports.run = function (client, message, args) {
    if (args == null || args.length == 0) {
        return;
    }

    if (args[0] == 'list' && args.length == 1) {
        showList(client, message);
        return;
    }

    for (var i = 0; i < args.length; i++) {
        if (/^(つきむら|月村|つっきー)(さん|くん|君|氏)?$/.test(args[i])) {
            message.channel.sendMessage('おやだまで　ひたいを　なぐろう。');
            break;
        }
        if (/^はぢ(さん)?$/.test(args[i])) {
            message.channel.sendMessage('なすで　なぐろう。');
            break;
        }

        const jsonKey = monster_key.getKey(args[i]);
        if (jsonKey == null) {
            message.channel.sendMessage(args[i] + 'というもんすたーは　しらないぞ。');
            break;
        }

        if (!exists(jsonKey)) {
            message.channel.sendMessage(monster_info[jsonKey].name + 'のにくしつは　まだないぞ。\nはんたーのーとのすくしょを　とってもらえると　たすかるぞ。');
            break;
        }

        const embed = new Discord.RichEmbed()
            .setAuthor('受付嬢', client.user.avatarURL)
            .setTitle('相棒！　' + monster_info[jsonKey].name + 'の肉質情報だぞ。')
            .setImage('attachment://image.png')
            .attachFile(toImagePath(jsonKey), 'image.png');

        message.channel.sendEmbed(embed);
    }
}

function showList(client, message) {
    var listExist = "";
    var listNotExist = "";

    for (let key in monster_info) {
        if (exists(key)) {
            listExist += '- ' + monster_info[key].name + '\n';
        } else {
            listNotExist += '- ' + monster_info[key].name + '\n';
        }
    }

    const embed = new Discord.RichEmbed()
        .setAuthor('受付嬢', client.user.avatarURL)
        .addField('げんざい　ひょうじできる　もんすたーは　これだけだぞ。', listExist)
        .addBlankField(true)
        .addField('いかの　もんすたーは　すくしょぼしゅうちゅうだぞ。', listNotExist);

    message.channel.sendEmbed(embed);
}

function exists(key) {
    try {
        fs.statSync(toImagePath(key));
        return true;
    } catch (e) {
        return false;
    }
}

function toImagePath(key) {
    return 'image/nikushitsu/' + key + '.png';
}
