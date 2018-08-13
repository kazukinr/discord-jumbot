import { MessageHandler } from "../MessageHandler";
import { Client, Message } from "discord.js";

export class Dice implements MessageHandler {

    handleMessage(client: Client, message: Message): boolean {
        const params = message.content.match(/^([0-9]+)d([0-9]+)$/);
        if (params != null && params.length == 3) {
            const count = parseInt(params[1]);
            const max = parseInt(params[2]);
            if (count > 100) {
                message.channel.sendMessage("Count of dice must be same or less than 100.");
                return true;
            }

            var result: String = "";
            for (var i = 0; i < count; i++) {
                if (i > 0) {
                    result += "\n";
                }
                result += Math.ceil(Math.random() * max).toString();
            }
            return true;
        }
        return false;
    }
}