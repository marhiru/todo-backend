import Elysia from "elysia";

export const auth = new Elysia({
    prefix: "/authentication"
})

    .post("", ({request}) => {
        
    })
auth.handle(new Request("http://localhost/"))
