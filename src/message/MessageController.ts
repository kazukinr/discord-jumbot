import { Client, Message } from "discord.js";
import { Dice } from "./model/dice";
import { MessageHandler } from "./MessageHandler";

export class MessageController {
    private readonly MODELS: MessageHandler[] = [
        new Dice()
    ]

    public onMessageReceived(client: Client, message: Message) {
        this.MODELS.forEach(handler => {
            if (handler.handleMessage(client, message)) {
                return;
            }
        });
    }
}
