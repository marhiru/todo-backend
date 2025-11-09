import { Elysia } from "elysia";
import { list } from "./modules/list";
import { user } from "./modules/user";
import { authentication } from "./modules/authentication";

const version = require("../package.json").version

new Elysia({
    prefix: "/v1",
    normalize: true
})
    .get("/version", () => {
        return version
    })
    .listen(3000, ({ port }) => {
        port
    })
    
    .use(list)
    .use(user)
    .use(authentication)

