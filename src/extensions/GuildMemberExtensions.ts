import { GuildMember } from "discord.js";

export namespace GuildMemberExtensions {

    export function displayName(member: GuildMember): string {
        return member.nickname ? member.nickname : member.user.username;
    }
}
