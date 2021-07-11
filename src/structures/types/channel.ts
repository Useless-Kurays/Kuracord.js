import { Snowflake } from "./snowflake";

export interface IChannel {
    id: Snowflake;
    name: string;
    //topic: string; (Not implemented)
}