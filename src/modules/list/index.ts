import Elysia from "elysia";

export const list = new Elysia({
    prefix: "/list"
})
    .get("", () => "Hello")
    .post("", () => { })

list.handle(new Request("http://localhost/"))
