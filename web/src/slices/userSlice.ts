import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../interfaces';

export const fetch = createAsyncThunk(
    'user/fetch',
    async () => {
        // TODO: Call API to fetch user data.
        return {
            id: '',
            email: 'test.user@eduk8.net',
            firstName: 'Test',
            lastName: 'User'
        } as IUser;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetch.fulfilled, (state, action) => {
            state.data = action.payload as any;
        })
    }
});

export default userSlice.reducer;