import { t } from "elysia";

export const registerDTO = t.Object({
    username: t.String({minLength: 3, maxLength: 16}),
    password: t.String({minLength: 8, maxLength:128}),
    email: t.String({format: "email"})
})

export type registerDTO = typeof registerDTO.static