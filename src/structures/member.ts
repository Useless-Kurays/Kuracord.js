import { IMember } from "./types/member";
import { Snowflake } from "./types/snowflake";

export class Member {
    id: Snowflake;
    joinedAt?: Date;
    nickname: null | string;
    constructor(object: IMember) {
        this.id = object.id;
        this.joinedAt = object.joined;
        this.nickname = object.nickname;
    }
}