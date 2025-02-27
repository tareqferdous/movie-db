import { userModel } from "@/models/user-model";
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
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return user;
  }
  return null;
}
