import { Client } from "discord.js"
import { MessageController } from "./message/MessageController";
const client = new Client()
const messageController = new MessageController()

client.on("ready", () => {
    console.log("I am ready!");
})

client.on("message", message => {
    if (message.author.bot) return;
    try {
        messageController.onMessageReceived(client, message)
    } catch (e) {
        message.channel.sendMessage("An exception occurred. \n" + e)
    }
})

client.login(process.env.BOT_TOKEN);

