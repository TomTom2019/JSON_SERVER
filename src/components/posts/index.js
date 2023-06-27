import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment';
import { fetchPostById } from '../../store/utils/thunks';
import {clearPostById} from '../../store/reducers/posts'
import Newsletter from '../utils/newsletter'


import { Spinner } from 'react-bootstrap';

const PostComponent = ()=>{
  const posts = useSelector((state)=>state.posts)
  const dispatch = useDispatch()
  let params = useParams()

/*params = id*/
   useEffect(()=>{
      dispatch(fetchPostById(params.id))
   },[])
/*postById come from reducer
posts from thunks
hh
*/


   useEffect(()=>{
    return()=>{
        dispatch(clearPostById())
    }
   },[])

    return(
     <>
            { posts.postById ?
            <div className="article_container">
                <h1>{posts.postById.title}</h1>
                <div
                    style={{
                        background:`url(${posts.postById.imagexl})`
                    }}
                    className="image"
                ></div>
                <div className="author">
                    Created by: <span>{posts.postById.author} - </span>
                    <Moment format="DD MMMM">
                        {posts.postById.createdAt} 
                    </Moment>
                </div> 
                {/*dangerouslySetInnerHTML  inject html*/} 
                <div className="mt-3 content">
                    <div dangerouslySetInnerHTML={{
                        __html: posts.postById.content
                    }}></div>
                </div>
            </div>
            :null}
{/*code reusable*/}
         {posts.loading ?
             <div style={{textAlign:'center'}} >
                <Spinner animation='border'role="status">
                    <div className='visually-hidden'>Loading...</div>
                </Spinner>
             </div>
           :null}
        <Newsletter/>

        </>

        )
}

export default PostComponent