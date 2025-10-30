import { Elysia } from "elysia";
import { list } from "./modules/list";

new Elysia({
    prefix: "/v1",
    normalize: true
})
    .get("/version", () => {
        return "1.0.0"
    })
    .listen(3000, ({ port }) => {
        port
    })
    .use(list)

