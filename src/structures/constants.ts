export const Constants = {
    API_URL: "https://api.kuracord.tk/api",
    GATEWAY_URL: "wss://gateway.kuracord.tk",
    API_VERSION: 2,
    get FULL_API_URL() {
        return this.API_URL + "/v" + this.API_VERSION.toString()
    },
    get ME_ENDPOINT() {
        return this.FULL_API_URL + "/bots/@me"
    }
}