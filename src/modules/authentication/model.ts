import { t } from "elysia";

export const loginDTO = t.Object({
    username: t.String({minLength: 3, maxLength: 16}),
    password: t.String({minLength: 8, maxLength:128}),
})

export type loginDTO = typeof loginDTO.static