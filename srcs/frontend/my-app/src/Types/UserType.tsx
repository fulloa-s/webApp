export type UserType = {
    status: "logged" | "notLogged" | "pending",
    username: string
}

export type newUserType = {
    username: string,
    password: string
}