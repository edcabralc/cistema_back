import { model, connection, Model } from "mongoose";
import { UserType } from "@dto/user.type";
import { UserSchema } from "@schemas/user.schema";

const modelName: string = "User";

export default connection && connection.models[modelName]
  ? (connection.models[modelName] as Model<UserType>)
  : model<UserType>(modelName, UserSchema);
