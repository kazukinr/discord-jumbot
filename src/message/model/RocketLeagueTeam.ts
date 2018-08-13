import { MessageHandler } from "../MessageHandler";
import { Client, Message } from "discord.js";


export class RocketLeagueTeam implements MessageHandler {

    handleMessage(client: Client, message: Message): boolean {
        if (message.content == "team") {

            message.channel.send("ttsテストです", {
                tts: true
            })

            return true;
        }
        return false;
    }
}