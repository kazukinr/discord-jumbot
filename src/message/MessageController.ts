import { Client, Message } from "discord.js";
import { Dice } from "./model/Dice";
import { MessageHandler } from "./MessageHandler";
import { RocketLeagueTeam } from "./model/RocketLeagueTeam";

export class MessageController {
    private readonly MODELS: MessageHandler[] = [
        new Dice(),
        new RocketLeagueTeam()
    ]

    public onMessageReceived(client: Client, message: Message) {
        this.MODELS.forEach(handler => {
            if (handler.handleMessage(client, message)) {
                return;
            }
        });
    }
}
