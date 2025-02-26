"use server";

import { createUser } from "@/db/query";
import { userModel } from "@/models/user-model";
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
