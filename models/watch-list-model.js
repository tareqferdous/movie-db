import mongoose, { Schema } from "mongoose";

const WatchListSchema = new Schema({
  userId: { type: String, required: true },
  movieId: { type: String, required: true },
  title: { type: String, required: true },
  poster: { type: String },
});

export const WatchListModel =
  mongoose.models.watchlists ?? mongoose.model("watchlists", WatchListSchema);
