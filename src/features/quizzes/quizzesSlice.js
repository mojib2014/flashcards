import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

// thunk action creator
export const addQuizForTopicId = (payload) => {
  const { id, topicId } = payload;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(payload));
    dispatch(addQuizIdForTopic({ quizId: id, topicId }));
  };
};

// Action and Reducer creator
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes = {
        ...state.quizzes,
        [id]: { id, name, topicId, cardIds },
      };
    },
  },
});

// Exporting Reducer and action creators
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

// Slice selector
export const selectQuizzes = (state) => state.quizzes.quizzes;
