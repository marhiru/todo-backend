import Elysia from "elysia";

export const list = new Elysia({
    prefix: "/util"
})
    .get("/user-agent", ({request}) => {
        return request.headers.get('user-agent')
    })

    .get("/ip", ({request}) => {
        return request.headers.get("x-forwarded-for")
    })

list.handle(new Request("http://localhost/"))
