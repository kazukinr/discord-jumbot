import { Client, Message } from "discord.js";

export interface MessageHandler {
    handleMessage(client: Client, message: Message): boolean
}
