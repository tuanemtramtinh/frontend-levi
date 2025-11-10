import { axiosClient } from "@/api/axiosClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    username: string | null;
    userId: string | null;
    loading: boolean;
    error: string | null;
};

const initialState: UserState = {
    username: null,
    userId: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ username: string; userId: string }>) => {
            state.username = action.payload.username;
            state.userId = action.payload.userId;
        },
        clearUser: (state) => {
            state.username = null;
            state.userId = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action: PayloadAction<{ username: string; userId: string }>) => {
            state.loading = false;
            state.username = action.payload.username;
            state.userId = action.payload.userId;
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
});

export const login = createAsyncThunk(
    "user/login",
    async ( info: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post("/auth/login", info);
            const data = response.data;

            await AsyncStorage.setItem("token", data.token);

            return {
                username: data.user.fullName,
                userId: data.user.id,
            }
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
);

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;