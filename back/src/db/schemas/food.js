import { Schema, model } from "mongoose";

const FoodSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      index: true,
    },
    unit: {
      type: String,
      required: true,
    },
    calories: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FoodModel = model("Food", FoodSchema);

export { FoodModel };
