import {Form,Button} from 'react-bootstrap'
import {useRef,useEffect} from 'react'

// e.preventDefault not reload page
// preventDefault post data
const Newsletter = ()=>{
    const textInput = useRef()

   const handleSubmit = (e)=>{
   	e.preventDefault()
   	const value = textInput.current.value
   	console.log(value)
    /* create thunks =>create slice*/

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