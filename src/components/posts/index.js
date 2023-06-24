import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment';
import { fetchPostById } from '../../store/utils/thunks';



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
                <div className="mt-3 content">
                    <div dangerouslySetInnerHTML={{
                        __html: posts.postById.content
                    }}></div>
                </div>
            </div>
            :null}

         
        

        </>

        )
}

export default PostComponent