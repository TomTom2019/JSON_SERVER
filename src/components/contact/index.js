// useFormik is hook
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Alert} from 'react-bootstrap'
import {useDispatch} from 'react-redux'


const Contact = ()=>{
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues:{email:'',firstname:'',name:'',message:''},
    validationSchema: Yup.object({
      email: Yup.string()
      .required('email is required')
      .email('your email is invalid'),
      firstname:Yup.string()
      .required('your name is required'),
      name:Yup.string()
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
          <div className='form-group'>
             <label htmlFor="email">Email adress</label>
             <input
               type='email'
               className='form-control'
               name='email'
               placeholder='email@exemple.com'
               {...formik.getFieldProps('email')}

             />
              {formik.errors.email && formik.touched.email ? 
                  <Alert variant='danger'>
                    {formik.errors.email}
                  </Alert>
              :null}

          </div>

           <div className='form-group mt-2'>
             <label htmlFor="firstname">Firstname</label>
             <input
               type='text'
               className='form-control'
               name='firstname'
               placeholder='firstname please'
               {...formik.getFieldProps('firstname')}

             />
              {formik.errors.firstname && formik.touched.firstname ? 
                  <Alert variant='danger'>
                    {formik.errors.firstname}
                  </Alert>
              :null}

          </div>
            <hr/>
             <div className='form-group mt-2'>
             <label htmlFor="name">name</label>
             <input
               type='text'
               className='form-control'
               name='name'
               placeholder='Name please'
               {...formik.getFieldProps('name')}

             />
              {formik.errors.name && formik.touched.name ? 
                  <Alert variant='danger'>
                    {formik.errors.name}
                  </Alert>
              :null}

          </div>



          <div className='form-group mt-2'>
             <label htmlFor="message">message</label>
             
               <textarea
                 className='form-control'
                 name='message'
                 rows={3}
                 {...formik.getFieldProps('message')}

               />
                 
              
          
              {formik.errors.message && formik.touched.message ? 
                  <Alert variant='danger'>
                    {formik.errors.message}
                  </Alert>
              :null}

          </div>
          <button type='submit' className='btn btn-primary mt-2'>
            Send message
          </button>
       </form>

       </>

        )
}

export default Contact