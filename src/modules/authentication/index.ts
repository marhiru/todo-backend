import Elysia from "elysia";
import { loginDTO } from "./model";

export const authentication = new Elysia({
    prefix: "/authentication"
})

    .post("", ({request}) => {
        return request.body
    }, {
        body: loginDTO
    })


authentication.handle(new Request("http://localhost/"))
