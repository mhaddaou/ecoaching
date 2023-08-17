import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';
import { User } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import Router from 'next/router';
const router = Router;
interface AuthState {
  user: User | null;
  error: string | null;
  loading : boolean;
  loggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  error: null,
  loading : false,
  loggedIn : false,
};

export const googleSignInAsync = createAsyncThunk(
  'auth/googleSignIn',
  async (data,asyncThunk ) => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      return res.user;
    } catch (error  : any) {
      return asyncThunk.rejectWithValue(error.message)
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout : (state) =>{
        console.log('logged out');
        signOut(auth);
        state.user = null;
        state.loggedIn = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(googleSignInAsync.pending,() =>{
        return {
            ...initialState,
            loading : true,
        }
    })
    builder.addCase(googleSignInAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.loggedIn = true;
        state.error = null;
        router.push('/Dashboard');
    });
    builder.addCase(googleSignInAsync.rejected, (state, action : PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
      state.loggedIn = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
export const {logout} = authSlice.actions;
