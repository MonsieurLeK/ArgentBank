import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const signInUser = createAsyncThunk(
    'user/signin',
    async(userCredentials) => {
        await fetch('http://localhost:3001/api/v1/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": userCredentials.email,
                "password": userCredentials.password
            })
        })
        .then(response => console.log(response))
        console.log(userCredentials)
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
})

export default userSlice