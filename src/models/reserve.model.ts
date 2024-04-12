import { model, connection, Model } from "mongoose";
import { ReserveType } from "@dto/reserve.type";
import { ReserveSchema } from "@schemas/reserve.schema";

const modelName: string = "Reserve";

export default connection && connection.models[modelName]
  ? (connection.models[modelName] as Model<ReserveType>)
  : model<ReserveType>(modelName, ReserveSchema);
