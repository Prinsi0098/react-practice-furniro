import { createSlice } from "@reduxjs/toolkit";
import { BlogData } from "./BlogData";

const BlogSlice = createSlice({
  name: "blogItem",
  initialState: {
    BlogData: BlogData,
    recentData: [],
    viewBlog: [],
  },
  reducers: {
    addToRecent: (state, action) => {
      console.log("action.payload", action.payload);
      state.recentData.push(action.payload);
    },
    addToView: (state, action) => {
      if (state.viewBlog.length > 0) {
        state.viewBlog.splice(0, 1);
      }
      state.viewBlog.push(action.payload);

    }
  },
});


export const { addToRecent, addToView } = BlogSlice.actions
export default BlogSlice.reducer;