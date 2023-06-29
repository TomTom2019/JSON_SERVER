// layout will wrapp application
// centralize place to add what you want apply to all route
import {Container} from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = (props)=>{
	return(
      <Container className='mt-5 mb-5'>

      	{props.children}
      	<ToastContainer/>
      </Container>



		)
}

export default MainLayout