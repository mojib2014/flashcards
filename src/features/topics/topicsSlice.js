import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics = { ...state.topics, [id]: { id, name, icon, quizIds: [] } };
    },
    addQuizIdForTopic: (state, action) => {
      const { quizId, topicId } = action.payload;
      for (const key in state.topics) {
        if (key === topicId) {
          state.topics[key].quizIds.push(quizId);
        } else return state;
      }
    },
  },
});

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

export const selectTopics = (state) => state.topics.topics;
