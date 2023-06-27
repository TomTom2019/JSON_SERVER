import {Form,Button} from 'react-bootstrap'
import {useRef,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {showToast} from './tools'

import { addToNewsletter } from '../../store/utils/thunks'
// e.preventDefault not reload page
// preventDefault post data
const Newsletter = ()=>{
    const textInput = useRef()
    const dispatch = useDispatch();


   const handleSubmit = (e)=>{
   	e.preventDefault()
   	const value = textInput.current.value
   	console.log(value)
    /* create thunks =>create slice
      unwrap work with thunks
    */
    dispatch(addToNewsletter({email:value}))
    .unwrap()
    .then((response)=>{
      if(response.newsletter === 'added'){
        /* console.log('OK')*/
          showToast('SUCCESS','Thanks to join us')
         textInput.current.value = '';
      }
         if(response.newsletter === 'failed'){
         /*console.log('ERROR')*/
          showToast('ERROR','you are already on the list')
         textInput.current.value = '';

         }
    })


   }


	return(
     <div className="newsletter_container">
     	<h1>join newsletter</h1>
          <div className='form'>
          	<Form onSubmit={handleSubmit} className='mt-4'>
          	<Form.Group>
          		<Form.Control
               placeholder='Exemple: youremail.gmail.com'
               name='email'
               ref={textInput}
          		/>
          		</Form.Group>
          		<Button className='mt-2' variant='primary' type='submit'>
          			Add me to the list
          		</Button>
          	</Form>
          </div>
     </div>
   

    

		)
}

export default Newsletter