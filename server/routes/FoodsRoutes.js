import express from "express";
import {
  addFoods,
  deleteFoods,
  getFoodByCategory,
  getFoodById,
  getFoods,
  image,
  updateFood,
} from "../controllers/FoodsController.js";

const FoodRoutes = express.Router();

FoodRoutes.route("/Food").post(image, addFoods);
FoodRoutes.route("/Foods").get(getFoods);
FoodRoutes.route("/Food/:id").get(getFoodById);
FoodRoutes.route("/Foods/:Category").get(getFoodByCategory);
FoodRoutes.route("/Food/:id").patch(image,updateFood);
FoodRoutes.route("/Food/:id").delete(deleteFoods);

export default FoodRoutes;
