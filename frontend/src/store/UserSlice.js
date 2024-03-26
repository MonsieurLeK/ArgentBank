import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const signInUser = createAsyncThunk(
    'user/signin',
    async(userCredentials) => {
        const getToken = await fetch('http://localhost:3001/api/v1/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": userCredentials.email,
                "password": userCredentials.password
            })
        })
        .then(response => response.json())
        .then(data => data.body.token)
        return getToken
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState: {
        isConnected: false,
        userToken: '',
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(signInUser.fulfilled, (state, action) => {
            state.userToken = action.payload
            state.isConnected =  true
        })
    }
})



export default userSlice