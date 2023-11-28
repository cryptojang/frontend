// slice는 데이터와 할 수 있는 기능(리듀서) 모아놓은 파일

import { createSlice } from "@reduxjs/toolkit";
import { getTodos, toggleDone } from "./appThunk";
import { createTodo } from "../redux/appThunk";

const appSlice = createSlice({
  name: "appSlice", //slice 이름
  initialState: {
    //초기값 useState(0)와 대응됨
    todos: null,
    isLoading: false,
    newTodo: "",
  },
  reducers: {
    setNewTodo: (state, action) => {
      state.newTodo = action.payload;
    },
  },
  extraReducers: (builder) => {
    //백엔드로부터 값을 가져올때? 썽크 부착하는 곳
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      //appThunk의 return 값은 action에 담김
      state.todos = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      //appThunk의 return 값은 action에 담김
      state.todos = [...state.todos, action.payload];
      state.isLoading = false;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(toggleDone.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(toggleDone.fulfilled, (state, action) => {
      //appThunk의 return 값은 action에 담김
      state.todos = state.todos.map((v) => {
        if (v.id === action.payload.id) {
          return action.payload;
        } else {
          return v;
        }
      });
      state.isLoading = false;
    });
    builder.addCase(toggleDone.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// export {} = appSlice.actions; //reducers 있는 경우 따로 export 해줌
export const { setNewTodo } = appSlice.actions;

export default appSlice;
