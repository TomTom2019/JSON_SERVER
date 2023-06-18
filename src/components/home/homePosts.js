import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPosts } from '../../store/utils/thunks'

//  fecht post when component load
const HomePosts = () => {
    const dispatch = useDispatch();

/*here need argument from thunk and get posts*/
    useEffect(()=>{
        dispatch(fetchPosts({page:1,order:"desc",limit:6}))
    },[])

    return(
        <>
            home posts
        </>
    )
}

export default HomePosts;