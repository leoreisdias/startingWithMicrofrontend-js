import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  reducers: {
    fetchStarted(state){
      state.loading =  true
    },
    fetchSuccess(state, action){
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action){
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    }
  }
})

export const fetchToken = (user) => async (dispatch) => {
  try{
    console.log('sdas');
    dispatch(slice.actions.fetchStarted());
    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    );
    const data = await response.json();
    console.log(data)
    dispatch(slice.actions.fetchSuccess(data))

  }catch(error){
    dispatch(slice.actions.fetchError(error));
  }
}

export default slice.reducer