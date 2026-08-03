import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "./authAction";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false
  },

  // reducers: {
  //   addUser: (state, action) => {
  //     state.user = action.payload
  //     state.isAuthenticated = true
  //     state.isLoading = false
  //   },
  //   logout: (state) => {
  //     state.user = null
  //     state.isAuthenticated = false
  //     state.isLoading = false
  //   }
  // }

  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
        state.isLoading = false
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.user = null
        state.isAuthenticated = false
        state.isLoading = false
      })
      .addCase(hydrateUserAction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(hydrateUserAction.fulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
        state.isLoading = false
      })
      .addCase(hydrateUserAction.rejected, (state) => {
        state.user = null
        state.isAuthenticated = false
        state.isLoading = false
      })
  }
})

export default authSlice.reducer