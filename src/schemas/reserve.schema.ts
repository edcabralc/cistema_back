import { Schema } from "mongoose";
import { ReserveType, Status, Book } from "@dto/reserve.type";

export const ReserveSchema = new Schema<ReserveType>({
  id: String,
  date: { type: String, required: true },
  time: { type: [String], required: true },
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.PENDING,
    required: true,
  },
  students: { type: Number, required: true },
  userId: { type: String, required: true },
  classCode: { type: String, required: true },
  book: {
    type: String,
    enum: Object.values(Book),
    default: Book.LAB,
    required: true,
  },
});
