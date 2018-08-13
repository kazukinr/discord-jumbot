import { GuildMember } from "discord.js";

export class MemberUtiils {

    public static getValidName(member: GuildMember): string {
        if (member.nickname) {
            return member.nickname;
        } else {
            return member.user.username;
        }
    }
}