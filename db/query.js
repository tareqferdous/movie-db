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
