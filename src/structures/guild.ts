import { Channel } from "./channel";
import { Member } from "./member";
import { IGuild } from "./types/guild";
import { Snowflake } from "./types/snowflake";

export class Guild {
    id: Snowflake;
    name: string;
    channels: Map<Snowflake, Channel> = new Map()
    members: Map<Snowflake, Member> = new Map()
    constructor(object: IGuild) {
        this.id = object.id;
        this.name = object.name;
        object.channels.forEach(c=>{
            this.channels.set(c.id, c)
        })
        object.members.forEach(m=>{
            this.members.set(m.id, m)
        })
    }
}