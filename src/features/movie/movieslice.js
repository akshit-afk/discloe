import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommended :null,
    orignals :null,
    trending :null,
    newDisney:null
}

const movieSlice = createSlice({
    name :"movie",
    initialState,
    reducers : {
     setMovies : (state,action)=>{
      state.recommended = action.payload.recommended;
      state.orignals = action.payload.orignals;
      state.newDisney = action.payload.newDisney;
      state.trending = action.payload.trending;

     }
    }
})

export const { setMovies }  = movieSlice.actions;
export const selectrecommended =(state)=> state.movie.recommended;
export const selectorignals =(state)=> state.movie.orignals;
export const selecttrending =(state)=> state.movie.trending;
export const selectnewDisney =(state)=> state.movie.newDisney;

export default movieSlice.reducer