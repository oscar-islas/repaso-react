import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  '/users/example',
  async (term, thunkAPI) => {
    const result = await axios.get(`https://api.github.com/users/${term}`);
    return result.data;
  }
);

const user = createSlice({
  name: 'user',
  initialState: {
    value: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

//Exporto el reducer

export default user.reducer;
