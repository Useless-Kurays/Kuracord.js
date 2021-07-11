import { Guild } from "./guild";
import { Snowflake } from "./types/snowflake";
import { IUser } from "./types/user";
import { User } from "./user";

export class ClientUser extends User {
    guilds: Map<Snowflake, Guild> = new Map()
    constructor(object: IUser) {
        super(object)
        object.guilds?.forEach(g=>{
            this.guilds.set(g.id, new Guild(g))
        })
    }
}