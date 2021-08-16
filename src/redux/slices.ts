import {createSlice} from '@reduxjs/toolkit';

export interface User {
  name: string;
}

export interface UserListState {
  users: User[];
  loading: boolean;
  error: boolean;
}

const initialState: UserListState = {
  users: [],
  loading: true,
  error: true,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {},
});

export const userList = userListSlice.reducer;
