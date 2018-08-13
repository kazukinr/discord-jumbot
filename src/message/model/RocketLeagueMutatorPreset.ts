import { MessageHandler } from "../MessageHandler";
import { Client, Message } from "discord.js";
import { Random } from "../../util/Random";

/**
 * Suggest mutator settings (preset).
 * command: mp
 */
export class RocketLeagueMutatorPreset implements MessageHandler {
    private readonly PRESETS: string[] = [
        "ムーンボール",
        "デモリッション",
        "タイムワープ",
        "ピンボール",
        "キュービック",
        "ビーチボール",
        "スノーデイ"
    ]

    handleMessage(client: Client, message: Message): boolean {
        if (message.content == "mp") {
            message.channel.send(`次の試合は【${this.PRESETS[Random.nextInt(this.PRESETS.length)]}】で　いこう`);
            return true;
        }
        return false;
    }
}
