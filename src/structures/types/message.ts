//import { IMember } from "./member";
import { IChannel } from "./channel";
import { Snowflake } from "./snowflake";
import { IUser } from "./user";

export interface IMessage {
    id: Snowflake;
    author: IUser;
    content: string;
    channel: IChannel;
    timestamp: string | number;
    //member?: IMember;
}