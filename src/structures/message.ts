import { Channel } from "./channel";
import { IMessage } from "./types/message";
import { Snowflake } from "./types/snowflake";
import { User } from "./user";

export class Message {
    id: Snowflake;
    content: string;
    author: User;
    channel: Channel;
    createdAt?: Date;
    constructor(object: IMessage) {
        this.id = object.id;
        this.content = object.content;
        this.author = new User(object.author);
        this.createdAt = new Date(object.timestamp)
        this.channel = new Channel(object.channel);
    }
}