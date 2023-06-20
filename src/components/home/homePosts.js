import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Masonry from 'react-masonry-css'
import Moment from 'react-moment';

//  need react-router-bootstrap to work  as rooter.js
// <Route path='article/:id' element={<PostComponent/>} />
import { Button, Spinner} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { fetchPosts } from '../../store/utils/thunks'

//  fecht post when component load
// useselector show post
const HomePosts = () => {
      const homePosts = useSelector((state)=> state.posts)
    const dispatch = useDispatch();

 /*  loade only 6 when back home dont create more post*/
    useEffect(()=>{
            if(homePosts.articles.items.length <= 0 ){
            dispatch(fetchPosts({page:1,order:"desc",limit:6}))
        }
    },[])

    return(
        <>
            <Masonry
                 breakpointCols={{default:3,800:2,400:1}}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {homePosts.articles ?
        
               homePosts.articles.items.map((item)=>(
                    <div key={item.id} >  
                    <img
                      style={{width:'100%',height:'200px'}}
                      src={`${item.image}?${item.id}`}
                    />
                    <div className='author'>
                       <div>{item.author} </div>
                       <Moment format='DD MMM'>{item.createdAt} </Moment>
                    </div>
                    <div className='content'>
                                <div className='title'>{item.title}</div>
                                <div className='excerpt'>{item.excerpt}</div>
                                <LinkContainer to={`/article/${item.id}`} className="mt-3">
                                    <Button variant='light'>Read more</Button>
                                </LinkContainer>
                            </div>
                    </div>
                ))

                :null}

            </Masonry>
        </>
    )
}

export default HomePosts;