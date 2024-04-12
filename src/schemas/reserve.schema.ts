import { Schema } from "mongoose";
import { ReserveType, Status, Book } from "@dto/reserve.type";

export const ReserveSchema = new Schema<ReserveType>({
  id: String,
  date: String,
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.PENDING,
    require: true,
  },
  students: String,
  userId: String,
  classCode: String,
  book: {
    type: String,
    enum: Object.values(Book),
    default: Book.LAB,
    required: true,
  },
});
