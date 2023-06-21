import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const URL_SERV = "http://localhost:3001";
// URL_SERV => server

// name posts from reducer. fetchPosts is the name you want
// async (argument,thunk)
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async({page=1,order="asc",limit="10"},{ getState })=>{
        try{
            // http://localhost:3004/posts?_page=1&_limit=6&_order=desc&_sort=id
            /*here we use temple string from argument*/
            const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

           /* return item and articles  from posts.js reducer
             item:[] linked to postsSlice
           */
            const prevState = getState().posts;
             console.log(response.data)
         /*    this code work with homepost.js loadMorePosts*/
            return {
                items:[...prevState.articles.items,...response.data ],
                page: page,
                end:response.data === 0 ? true : false
            }
        } catch(error){
            throw error;
        }
    }
)