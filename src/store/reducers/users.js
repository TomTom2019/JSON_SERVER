import {createSlice} from '@reduxjs/toolkit'
import { addToNewsletter } from '../utils/thunks'

// now have a valid reducer => import store => index.js
/*       */
export const usersSlice = createSlice({
	name:'users',
	initialState:{
		action:{}
		},
	
	reducers:{
      clearNewsletter:(state)=>{
      	 state.action = {}
      }

	},
	extraReducers:(builder)=>{
		builder
		.addCase(addToNewsletter.fulfilled,(state,action)=>{
			/*return{
                newsletter:'added',
                email: response.data*/
           state.action = action.payload
		})
	}
})

export const {clearNewsletter} = usersSlice.actions
export default usersSlice.reducer