import { userModel } from "@/models/user-model";
import { WatchListModel } from "@/models/watch-list-model";
import { dbConnect } from "@/services/mongo";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";

export const createUser = async (user) => {
  try {
    await dbConnect();
    return await userModel.create(user);
  } catch (error) {
    console.log(error);
  }
};

export async function findUserByCredentials(credentials) {
  await dbConnect();
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return user;
  }
  return null;
}

export const createWatchLst = async (movie) => {
  try {
    await dbConnect();
    return await WatchListModel.create(movie);
  } catch (error) {
    console.log(error);
  }
};

export const getWatchList = async (userId) => {
  try {
    await dbConnect();
    const lists = await WatchListModel.find({ userId });
    return lists;
  } catch (error) {
    console.log(error);
  }
};

export const deleteWatchListMovie = async (id) => {
  try {
    await dbConnect();
    const result = await WatchListModel.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    if (result.deletedCount === 0) {
      throw new Error("No item found with the given ID");
    }
    revalidatePath("/watch-list");
    return { success: true, message: "Item deleted successfully" };
  } catch (error) {
    console.log(error);
  }
};
