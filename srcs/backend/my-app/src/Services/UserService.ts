import { PrismaClient } from "@prisma/client";
import { UserType } from "../Types/UserType";

const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

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

export {registerUser}