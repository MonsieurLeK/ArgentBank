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

export const userProfile = createAsyncThunk(
    'user/profile',
    async(userToken) => {
        const getProfile = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${userToken}` ,
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => data.body)
        .catch(error => console.log(error))
        return getProfile
    }
)

export const changeUserName = createAsyncThunk(
    'user/changeUserName',
    async(userToken, newUserName) => {
        const changeName = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${userToken}` ,
            },
            body:{
                "userName": {newUserName}
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
        return changeName
    }
)

const initialState = {
    isConnected: false,
    userToken: '',
    userFirstName: '',
    userLastName: '',
    userId: '',
    userName: '',
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: () => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(changeUserName.fulfilled, (state, action) => {
            state.userName = action.payload
        })
        builder.addCase(signInUser.fulfilled, (state, action) => {
            state.userToken = action.payload
            state.isConnected =  true
        },
        builder.addCase(userProfile.fulfilled, (state, action) => {
            const { firstName, lastName, id, userName } = action.payload
            state.userFirstName = firstName
            state.userLastName = lastName
            state.userId = id
            state.userName = userName
        })
        )
    }

})

export const { resetState } = userSlice.actions
export default userSlice