import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getBgImage = createAsyncThunk("image/Bg", async () => {
  const image = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID CTOuXHsmXyZ3NVQeHZUjySV-HuN25nYpZ4c11GlsWsY",
    },
    params: {
      query: "thunderstorm",
    },
  });
  const ind = Math.floor(Math.random() * 10);
  console.log(image.data.results[ind]);
  return image.data.results[ind].urls.full;
});

export { getBgImage };
