//리덕스로 비동기 처리할 때 사용. get, put 요청 하는 걸 다 여기서 함

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get("http://localhost:3010/todos");

  return response.data.todos; // 요 값은 appSlice fulfilled의 action.payload에 들어있음
});

export const createTodo = createAsyncThunk(
  "appSlice/createTodo",
  async ({ title }) => {
    const response = await axios.post(
      "http://localhost:3010/todos",
      { title },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.todo;
  }
);

export const toggleDone = createAsyncThunk(
  "appSlice/toggleDone", //썽크 이름
  async ({ todoId }) => {
    const response = await axios.put(`
    http://localhost:3010/todos/${todoId}/done`);

    return response.data.todo;
  }
);

export const updateTodo = createAsyncThunk(
  "appSlice/updateTodo", //썽크 이름
  async ({ todoId, title }) => {
    const response = await axios.put(
      `
    http://localhost:3010/todos/${todoId}`,
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.todo;
  }
);
