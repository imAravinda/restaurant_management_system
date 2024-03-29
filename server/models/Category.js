import mongoose from "mongoose";

const CategorySchema = mongoose.Schema(
  {
    CategoryName: {
      type: String,
    },
    CategoryImage: {
      type: String,
    },
    SerialNo: {
      type: String,
    },
    Status: {
      type: String,
      enum: {
        values: ["Available", "Not Available"],
      },
      default: "Available",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
