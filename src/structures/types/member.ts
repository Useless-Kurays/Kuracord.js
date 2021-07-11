import { Snowflake } from "./snowflake";

export interface IMember {
    nickname: string | null;
    id: Snowflake;
    joined: Date;
}