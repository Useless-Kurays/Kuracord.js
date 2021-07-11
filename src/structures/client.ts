import { Constants } from "./constants";
const fetch = require("node-fetch")
import WebSocket from 'ws';
import EventEmitter from "events";
import { User } from "./user";
import { ClientUser } from "./clientuser";
import { Message } from "./message";

export class Client extends EventEmitter {
    token?: string;
    ws?: WebSocket;
    user?: User;
    constructor() {
        super()
    }
    async login(token: string): Promise<string> {
        Object.defineProperty(this, "token", {
            value: token,
            configurable: false,
            enumerable: false
        })
        this.ws = new WebSocket(Constants.GATEWAY_URL)
        this.ws.on("open", () => {
            this.ws?.send(JSON.stringify({
                op: 1,
                t: "",
                d: {
                    token: this.token
                }
            }))
        })
        this.ws.on("message", async (data: string) => {
            let message = JSON.parse(data);
            if (message.op == 1) {
                const user = await (await fetch(Constants.ME_ENDPOINT, {
                    headers: {
                        Authorization: this.token
                    }
                })).json()
                this.user = new ClientUser(user)
                this.emit("ready");
            }
            if (message.op == 2) {
                if (message.t == "MESSAGE_CREATE") {
                    let msg = new Message(message.d)
                    this.emit("message", msg)
                }
            }
        })
        this.ws.on("close", (code) => {
            this.emit("debug", `[WS] Close code ${code}`)
            if (code == 1005) throw new Error("Invalid token provided")
            this.login(token)
        })
        return token;
    }
}