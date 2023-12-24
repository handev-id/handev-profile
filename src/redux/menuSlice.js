import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "Menu",
  initialState: {
    currentMenu: "profile",
    showMenu: false,
  },
  reducers: {
    changeMenu: (state, { payload }) => {
      state.currentMenu = payload.changeMenu;
    },
    displayMenu: (state, { payload }) => {
      state.showMenu = payload.showMenu;
    },
  },
});

export const { changeMenu, displayMenu } = menuSlice.actions;
export default menuSlice.reducer;
