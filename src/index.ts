import { Elysia } from "elysia";
import { list } from "./modules/list";

const version = require("../package.json").version

new Elysia({
    prefix: "/v1",
    normalize: true
})
    .get("/version", () => {
        return version
    })
    .listen(3002, ({ port }) => {
        port
    })
    .use(list)

