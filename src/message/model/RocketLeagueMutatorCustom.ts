import { Client, Message } from "discord.js";
import { MessageHandler } from "../MessageHandler";
import { Random } from "../../util/Random";

/**
 * Suggest mutator settings (custom).
 * command: mc
 */
export class RocketLeagueMutatorCustom implements MessageHandler {
    private readonly GAME_SPEED: string[] = ["デフォルト", "スローモーション", "タイムワープ"];
    private readonly BALL_MAX_SPEED: string[] = ["デフォルト", "低速", "高速", "超高速"];
    private readonly BALL_TYPE: string[] = ["デフォルト", "キューブ", "パック", "バスケットボール"];
    private readonly BALL_WEIGHT: string[] = ["デフォルト", "軽", "重", "超軽量", "10周年記念"];
    private readonly BALL_SIZE: string[] = ["デフォルト", "小", "大", "巨大"];
    private readonly BALL_ELASTICITY: string[] = ["デフォルト", "弱", "強", "最強"];
    private readonly BOOST_ENERGY: string[] = ["デフォルト", "ブーストなし", "無制限", "リチャージ（低速）", "リチャージ（高速）"];
    private readonly RAMBLE: string[] = ["なし", "デフォルト", "低速", "礼儀", "デモリッション", "バネ付き", "スパイクのみ"];
    private readonly BOOST_POWER: string[] = ["1X", "1.5X", "2X", "10X"];
    private readonly GRAVITY: string[] = ["デフォルト", "低", "高", "超"];
    private readonly DESTROY: string[] = ["デフォルト", "フレンドリー・ファイア", "接触時", "接触時（FF）"];
    private readonly RESPAWN_TIME: string[] = ["3秒間", "2秒間", "1秒間", "ゴールリセット無効"];

    handleMessage(client: Client, message: Message): boolean {
        if (message.content == "mc") {
            var result = "次の試合は\n";
            result += "\n";
            result += "ゲームスピード：" + this.GAME_SPEED[Random.nextInt(this.GAME_SPEED.length)] + "\n";
            result += "ボール最高速度：" + this.BALL_MAX_SPEED[Random.nextInt(this.BALL_MAX_SPEED.length)] + "\n";
            result += "ボールタイプ　：" + this.BALL_TYPE[Random.nextInt(this.BALL_TYPE.length)] + "\n";
            result += "ボール重量　　：" + this.BALL_WEIGHT[Random.nextInt(this.BALL_WEIGHT.length)] + "\n";
            result += "ボールサイズ　：" + this.BALL_SIZE[Random.nextInt(this.BALL_SIZE.length)] + "\n";
            result += "ボール弾性　　：" + this.BALL_ELASTICITY[Random.nextInt(this.BALL_ELASTICITY.length)] + "\n";
            result += "ブースト量　　：" + this.BOOST_ENERGY[Random.nextInt(this.BOOST_ENERGY.length)] + "\n";
            result += "ランブル　　　：" + this.RAMBLE[Random.nextInt(this.RAMBLE.length)] + "\n";
            result += "ブースト強度　：" + this.BOOST_POWER[Random.nextInt(this.BOOST_POWER.length)] + "\n";
            result += "重力　　　　　：" + this.GRAVITY[Random.nextInt(this.GRAVITY.length)] + "\n";
            result += "破壊　　　　　：" + this.DESTROY[Random.nextInt(this.DESTROY.length)] + "\n";
            result += "リスポーン期間：" + this.RESPAWN_TIME[Random.nextInt(this.RESPAWN_TIME.length)] + "\n";
            result += "\n";
            result += "で　いこう";
            message.channel.send(result);

            return true;
        }
        return false;
    }
}
