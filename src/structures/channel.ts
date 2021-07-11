import { IChannel } from "./types/channel";
import { Snowflake } from "./types/snowflake";

export class Channel {
    id: Snowflake;
    name: string;
    constructor(object: IChannel) {
        this.id = object.id;
        this.name = object.id;
    }
}