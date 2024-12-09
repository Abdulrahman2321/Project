import { Schema, model } from "mongoose";

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videos: [{ title: String, url: String }],
});

export default model("Course", CourseSchema);
