// slice는 데이터와 할 수 있는 기능(리듀서) 모아놓은 파일

import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "appSlice", //slice 이름
  initialState: {
    //초기값 useState(0)와 대응됨
  },
  reducers: {},
  extraReducers: {
    //백엔드로부터 값을 가져올때? 썽크로?
  },
});

// export {} = appSlice.actions; //reducers 있는 경우 따로 export 해줌

export default appSlice;
