import { PrismaClient } from "@prisma/client";
import { UserType } from "../Types/UserType";
import * as jwt from "../Helpers/jwtLogic";

const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const error = require("http-errors");

async function registerUser(newUser: UserType): Promise<UserType> {
  const { username, password }: UserType = newUser;
  const hashPassword = bcrypt.hashSync(password, 10);

  const user = await prisma.user.create({
    data: {
      username: username,
      password: hashPassword,
    },
  });
  return user;
}

async function login(newUser: UserType): Promise<any> {
  const { username, password } = newUser;
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (!user) {
    throw error.NotFound("User not registered");
  }
  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword)
    throw error.Unauthorized("Username or password not valid");
  const accessToken = await jwt.signToken(user);
  return { username, accessToken };
}

export { registerUser, login };
