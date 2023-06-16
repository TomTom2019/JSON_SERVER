import {createSlice} from '@reduxjs/toolkit'

// now have a valid reducer => import store => index.js
export const postsSlice = createSlice({
	name:'posts',
	initialState:{
		loading:true,
		articles:{
			items:[]
		}
	},
	reducers:{

	}
})

export default postsSlice.reducer