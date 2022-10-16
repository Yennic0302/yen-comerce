const { createSlice } = require("@reduxjs/toolkit");

const initialState = JSON.parse(localStorage.getItem("theme-yen-comerce")) || {
  mcTheme: "mc-theme-l",
  mcApp: "mc-app-l",
  tsc: "tsc-l",
  mct: "mct-l",
  sct: "sct-l",
  tct: "tct-l",
  bgm: "bgm-l",
  bgs: "bgs-l",
  bgt: "bgt-l",
  bgf: "bgf-l",
};

const themeReducer = createSlice({
  name: "theme-yen-comerce",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      switch (action.payload) {
        case "ligth": {
          let theme = {
            mcTheme: "mc-theme-l",
            mcApp: "mc-app-l",
            tsc: "tsc-l",
            mct: "mct-l",
            sct: "sct-l",
            tct: "tct-l",
            bgm: "bgm-l",
            bgs: "bgs-l",
            bgt: "bgt-l",
            bgf: "bgf-l",
          };

          localStorage.setItem("theme-yen-comerce", JSON.stringify(theme));
          return theme;
        }

        case "dark": {
          let theme = {
            mcTheme: "mc-theme-d",
            mcApp: "mc-app-d",
            tsc: "tsc-d",
            mct: "mct-d",
            sct: "sct-d",
            tct: "tct-d",
            bgm: "bgm-d",
            bgs: "bgs-d",
            bgt: "bgt-d",
            bgf: "bgf-d",
          };

          localStorage.setItem("theme-yen-comerce", JSON.stringify(theme));
          return theme;
        }

        case "dark-red": {
          let theme = {
            mainColor: "dark-red-main",
            secondColor: "dark-red-second",
          };

          localStorage.setItem("theme-yen-comerce", JSON.stringify(theme));
          return theme;
        }

        case "dark-blue": {
          let theme = {
            mainColor: "dark-blue-main",
            secondColor: "dark-blue-second",
          };

          localStorage.setItem("theme-yen-comerce", JSON.stringify(theme));
          return theme;
        }
      }
    },
  },
});

export const { setTheme } = themeReducer.actions;
export default themeReducer.reducer;
