import { Elysia } from "elysia";

new Elysia({
    prefix: "/v1",
    normalize: true
})
    .get("/version", () => {
        return "1.0.0"
    })
    .listen(3002, ({ port }) => {
        port
    })

