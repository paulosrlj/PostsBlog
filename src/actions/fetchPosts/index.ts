import { createSlice } from "@reduxjs/toolkit";

export type PostType = {
  title: string;
  username: string;
  content: string;
  created_datetime: string;
  id: number;
};

export type PostTypeCleaned = {
  title: string;
  username: string;
  content: string;
  created_datetime: number;
  id: number;
};

export function getMinutesDifference(date: Date): number {
  let diff = (new Date().getTime() - date.getTime()) / 1000;
  diff /= 60;

  return Math.abs(Math.round(diff));
}

type InitialStateType = {
  currentUrl: string;
  firstPageUrl: string;
  data: Array<PostTypeCleaned>
}

const initialState: InitialStateType = {
  firstPageUrl: 'https://dev.codeleap.co.uk/careers/',
  currentUrl: 'https://dev.codeleap.co.uk/careers/',
  data: []
}

const fetchPostsSlice = createSlice({
  name: "input",
  initialState: initialState,
  reducers: {
    updateUrl: (state, action) => {
      state.currentUrl = action.payload;
    },
    updateData: (state, action) => {
      const convertedData: PostTypeCleaned[] = action.payload.map(
        (post: PostType) => {
          const newPost: any = { ...post };

          newPost.created_datetime = new Date(newPost.created_datetime);

          newPost.created_datetime = getMinutesDifference(
            new Date(post.created_datetime)
          );
          return newPost;
        }
      );

      const newState = [...state.data, ...convertedData]
      .sort((postA: PostTypeCleaned, postB: PostTypeCleaned) => {
        return postB.created_datetime + postA.created_datetime;
      });

      state.data = newState;
    },
    getInitialData: (state, action) => {
      const convertedData: PostTypeCleaned[] = action.payload.map(
        (post: PostType) => {
          const newPost: any = { ...post };

          newPost.created_datetime = new Date(newPost.created_datetime);

          newPost.created_datetime = getMinutesDifference(
            new Date(post.created_datetime)
          );
          return newPost;
        }
      );

      const newState = [...convertedData]
      .sort((postA: PostTypeCleaned, postB: PostTypeCleaned) => {
        return postB.created_datetime + postA.created_datetime;
      });

      state.data = newState;
    }
  },
});

export const fetchPostsActions = fetchPostsSlice.actions;

export { fetchPostsSlice };
