import { Schema, model, connection } from "mongoose";

type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  recoverypasswordToken: string;
  role: string;
};

const schema = new Schema<UserType>({
  id: String,
  name: String,
  email: String,
  password: String,
  recoverypasswordToken: String,
  role: String,
});

const modelName: string = "User";

export default connection && connection.models[modelName]
  ? connection.models[modelName]
  : model<UserType>(modelName, schema);
