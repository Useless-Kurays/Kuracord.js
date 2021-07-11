import { IGuild } from './guild';
import { Snowflake } from './snowflake'
export interface IUser {
    id: Snowflake;
    username: string;
    discriminator: string;
    avatar: string;
    flags: number;
    guilds?: Array<IGuild> | undefined;
}