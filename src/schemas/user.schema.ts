import { Schema } from "mongoose";
import { UserType } from "@dto/user.type";

export const UserSchema = new Schema<UserType>({
  id: String,
  name: String,
  email: { type: String, required: true },
  password: String,
  role: { type: String, required: true },
  recoverypasswordToken: String,
  reserve: [{ reserveId: String }],
});
