import { MessageHandler } from "../MessageHandler";
import { Client, Message } from "discord.js";
import { Random } from "../../util/Random";
import { MemberUtiils } from "../../util/MemberUtils";

/**
 * Grouping members in voice channel into team BLUE or ORANGE.
 * command: team  note that the user must be in a voice channel.
 */
export class RocketLeagueTeam implements MessageHandler {

    handleMessage(client: Client, message: Message): boolean {
        if (message.content == "team" && message.member && message.member.voiceChannel) {
            const members = message.member.voiceChannel.members;
            if (members.size <= 1) {
                message.channel.send("ぼっちだぞ");
                return true
            }

            const maxSize = Math.ceil(members.size / 2);
            const blueMembers = new Array<string>();
            const orangeMembers = new Array<string>();

            members.forEach((member, key) => {
                if (blueMembers.length >= maxSize) {
                    orangeMembers.push(MemberUtiils.getValidName(member));
                } else if (orangeMembers.length >= maxSize) {
                    blueMembers.push(MemberUtiils.getValidName(member));
                } else {
                    if (Random.nextInt(2) == 0) {
                        blueMembers.push(MemberUtiils.getValidName(member));
                    } else {
                        orangeMembers.push(MemberUtiils.getValidName(member));
                    }
                }
            });

            var result = "";
            result += "ブルー　：" + blueMembers.join(" , ") + "\n";
            result += "オレンジ：" + orangeMembers.join(" , ")

            message.channel.send(result, {
                tts: true
            });
            return true;
        }
        return false;
    }
}
