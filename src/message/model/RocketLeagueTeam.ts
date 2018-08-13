import { MessageHandler } from "../MessageHandler";
import { Client, Message } from "discord.js";
import { Random } from "../../util/Random";

/**
 * Grouping members in voice channel into team BLUE or ORANGE.
 * command: team  note that the user must be in a voice channel.
 */
export class RocketLeagueTeam implements MessageHandler {

    handleMessage(client: Client, message: Message): boolean {
        if (message.content == "team" && message.member.voiceChannel) {
            const members = message.member.voiceChannel.members;
            if (members.size <= 1) {
                message.channel.send("ぼっちだぞ");

                members.forEach((member, key) => {
                    message.channel.send("デバッグ情報です。");
                    message.channel.send("member.nickname : " + member.nickname);
                    message.channel.send("member.user.username : " + member.user.username);
                })

                return true
            }

            const blueSize = Math.ceil(members.size / 2);
            const orangeSize = Math.floor(members.size / 2);

            const blueMembers = new Array<string>();
            const orangeMembers = new Array<string>();

            members.forEach((member, key) => {
                if (blueMembers.length >= blueSize) {
                    orangeMembers.push(member.nickname);
                } else if (orangeMembers.length >= orangeSize) {
                    blueMembers.push(member.nickname);
                } else {
                    if (Random.nextInt(2) == 0) {
                        blueMembers.push(member.nickname);
                    } else {
                        orangeMembers.push(member.nickname);
                    }
                }
            });

            var result = "";
            result += "ブルー　 : " + blueMembers.join(" , ") + "\n";
            result += "オレンジ : " + orangeMembers.join(" , ")

            message.channel.send(result, {
                tts: true
            });
            return true;
        }
        return false;
    }
}
