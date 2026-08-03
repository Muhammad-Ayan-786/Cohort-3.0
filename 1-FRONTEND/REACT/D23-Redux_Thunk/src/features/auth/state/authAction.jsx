import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import toast from "react-hot-toast";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("thunk action triggered..")
      const res = await api.post("/auth/login", credentials)
      localStorage.setItem('accessToken', res.data.accessToken)
      toast.success('Login successful')
      return res.data

    } catch (error) {
      toast.error("login failed");
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const hydrateUserAction = createAsyncThunk(
  "auth/hydrate",
  async (_, thunkApi) => {
    const token = localStorage.getItem('accessToken')

    try {
      const res = await api.get("/auth/me", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return res.data

    } catch (error) {
      toast.error("Unauthorized user");
      return thunkApi.rejectWithValue("Unauthorized user");
    }
  }
)