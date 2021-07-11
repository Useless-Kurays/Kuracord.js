import { IChannel } from "./channel";
import { IMember } from "./member";
import { Snowflake } from "./snowflake";

export interface IGuild {
    id: Snowflake;
    name: string;
    channels: Array<IChannel>;
    members: Array<IMember>;
}