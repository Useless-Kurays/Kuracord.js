import { Snowflake } from './types/snowflake';
import { IUser } from './types/user'
export class User {
    id: Snowflake;
    username: string;
    discriminator: string;
    avatar: string;
    flags: number;
    constructor(object: IUser) {
        this.id = object.id;
        this.username = object.username;
        this.discriminator = object.discriminator;
        this.avatar = object.avatar;
        this.flags = object.flags;
    }
    get tag() {
        return this.username + "#" + this.discriminator;
    }
}