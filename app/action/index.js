"use server";

import { createUser, createWatchLst, findUserByCredentials } from "@/db/query";
import { userModel } from "@/models/user-model";
import { WatchListModel } from "@/models/watch-list-model";
import { dbConnect } from "@/services/mongo";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
  try {
    await dbConnect();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    const user = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return { error: "All fields are required" };
    }

    if (password.length < 6) {
      return { error: "Password must be 6 characters long" };
    }

    if (password !== confirmPassword) {
      return { error: "Password not matched" };
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return { error: "User already exists" };
    }

    const created = await createUser(user);
  } catch (error) {
    console.log("Registration error", error);
    return { error: "Something went wrong! please try again later" };
  } finally {
    redirect("/login");
  }
};

export async function performLogin(formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const user = {
      email,
      password,
    };

    const found = await findUserByCredentials(user);
    return found;
  } catch (error) {
    throw error;
  }
}

export const addMovieToWatchList = async (movieInfo) => {
  try {
    await dbConnect();
    const exist = await WatchListModel.findOne(movieInfo);
    if (exist) {
      return { message: "Already in watchList" };
    }
    const addedToWatchList = await createWatchLst(movieInfo);
    return { message: "Added to Watchlist" };
  } catch (error) {
    return { message: "Error adding movie" };
  }
};
