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
// posts work with reducer
/*       */
export const fetchPostById =createAsyncThunk(
      'posts/fetchPostById',
      async(id)=>{
        try{
           const response = await axios.get(`${URL_SERV}/posts/${id}`)
           return response.data
        }catch(error){
            throw error
        }
      }

    )

export const addToNewsletter = createAsyncThunk(
    'users/addToNewsletter',
      async(data)=>{
          try{
            const findUser = await axios.get(`${URL_SERV}/newsletter?email=${data.email}`)

            if(!Array.isArray(findUser.data) || !findUser.data.length){
                const response = await axios({
                  method:'POST',
                  url:`${URL_SERV}/newsletter`,
                  data:{
                    email: data.email
                  }
                });
               return{
                newsletter:'added',
                email: response.data
               }

            }else{
                return{
                    newsletter:'failed',
                }
            }

          }catch(error){
            throw error
          }
      }
    )