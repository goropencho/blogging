import { ValidateUserInterface } from "@/lib/schemas/user_schema";
import prisma from "./prismaService";
import bcrypt from "bcrypt";
import jose from "jose";
import { LoginUserDetails } from "../models/res/login_res_dto";
import { encrypt } from "./jwtService";

export async function validateUser(formData: ValidateUserInterface): Promise<LoginUserDetails | null> {
  const { email, pwd } = formData;
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid Email/Pwd")
  }
  const validatePassword = await bcrypt.compare(pwd, user.pwd);

  if(!validatePassword){
    throw new Error("Invalid Email/Pwd");
  }

  const token = await encrypt({user: {
    id: user.id,
    email: user.email
  }})
  
  return {
    ...user,
    token,
  }
}
