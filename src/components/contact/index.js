// useFormik is hook
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Alert} from 'react-bootstrap'
import {useDispatch} from 'react-redux'


const Contact = ()=>{
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues:{email:'',firstname:'',lastname:'',message:''},
    validationSchema: Yup.object({
      email: Yup.string()
      .required('email is required')
      .email('your email is invalid'),
      firstname:Yup.string()
      .required('your name is required'),
      lastname:Yup.string()
      .required('your lastname is required'),
      message:Yup.string()
      .required('message is required')
      .max(500,'your message is too long')
      
    }),
    onSubmit:(values,{restForm})=>{
      /// dispatch
      console.log(values)
    }

  })



    return(
       <>
       <h1>Contact us</h1>
       <form className='mt-3' onSubmit={formik.handleSubmit}>
          <div>
             
          </div>
       </form>

       </>

        )
}

export default Contact