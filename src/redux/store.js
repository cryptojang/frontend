//slice 모아놓는 곳

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    //여기에 slice 부착

    appReducer: appSlice.reducer,
  },
});

export default store; // import store from "./redux/store"; 이렇게 아무 이름으로 임포트해도 됨 그냥 export 는 {}로 임포트해야 함
