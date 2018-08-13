import { MessageHandler } from "../MessageHandler";
import { Client, Message } from "discord.js";
import { Random } from "../../util/Random";

/**
 * Throw dice and send result as a message.
 * command: {count}d{max}  for example, 3d100 means dice100 will be thrown 3 time.
 */
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

            var result = "";
            for (var i = 0; i < count; i++) {
                if (i > 0) {
                    result += "\n";
                }
                result += (Random.nextInt(max) + 1).toString();
            }
            message.channel.send(result);
            return true;
        }
        return false;
    }
}