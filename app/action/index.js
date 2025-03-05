"use server";

import {
  createUser,
  createWatchLst,
  deleteWatchListMovie,
  findUserByCredentials,
  getWatchList,
} from "@/db/query";
import { userModel } from "@/models/user-model";
import { WatchListModel } from "@/models/watch-list-model";
import { dbConnect } from "@/services/mongo";
import { revalidatePath } from "next/cache";
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
      return { message: "Already in watchList", status: "exists" };
    }
    const addedToWatchList = await createWatchLst(movieInfo);
    revalidatePath("/watch-list");
    return { message: "Added to Watchlist", status: "ok" };
  } catch (error) {
    return { message: "Error adding movie", status: "wrong" };
  }
};

export const getWatchListMovies = async (userId) => {
  try {
    await dbConnect();
    const movies = await getWatchList(userId);
    revalidatePath("/watch-list");
    return movies;
  } catch (error) {
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    await dbConnect();
    const deletedMovie = await deleteWatchListMovie(id);
    revalidatePath("/watch-list");
    return deletedMovie;
  } catch (error) {
    throw error;
  }
};
