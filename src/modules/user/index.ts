import Elysia from "elysia";
import { registerDTO } from "./model";

export const user = new Elysia({
    prefix: "/user"
})
    .post("", ({request}) => {
        return request.body
    }, {
        body: registerDTO
    })
    

user.handle(new Request("http://localhost/"))
