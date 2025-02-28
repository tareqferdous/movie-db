import { userModel } from "@/models/user-model";
import { WatchListModel } from "@/models/watch-list-model";
import { dbConnect } from "@/services/mongo";

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
