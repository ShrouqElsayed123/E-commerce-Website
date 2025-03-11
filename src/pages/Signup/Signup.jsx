
import {  useFormik } from 'formik'
import './Signup.css'
import axios from 'axios'
import { object, ref, string } from 'yup'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate=useNavigate()
  const [accountExitMessage,setAccountExitMessage]=useState(null)

const validationSchema=object({
  name:string().required(),
  email:string().required().email(),
  password:string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
  rePassword:string().required().oneOf([ref("password")]),
  phone:string().required().matches(/^01[0125][0-9]{8}$/)
})

async function sendDataToSignup (values) {
 const loadingId= toast.loading("data sending .....")
  try{
    const options={
      url:"https://ecommerce.routemisr.com/api/v1/auth/signup",
      method:"POST",
      data:values
    }
   let {data}= await axios.request(options)
   if(data.message=="success"){
    toast.dismiss(loadingId)
    toast.success("User Created Successfully");
    setTimeout(()=>{navigate("/login")},2000)
   }
   console.log(data);
  }
  catch(error){
    toast.dismiss(loadingId)
setAccountExitMessage(error.response.data.message)

  }
 
} 
const formik =useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
  },
  validationSchema,
  onSubmit:sendDataToSignup
})
  
  return (
    <>
   <div className="signup p-5">
   <div className="container">
   <h3 className='mb-3'>Register Now</h3>
   <form onSubmit={formik.handleSubmit}>

    {/* ///////////////////////name////// */}
    <div className='name'>
      <label>name:</label>
      <br />
      <input type="text" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
      name='name'
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.name && formik.touched.name && (<p className="text-danger">{formik.errors.name}</p>)}
    </div>
    {/* ///////////////////////email////// */}

    <div className='email'>
      <label>E-mail</label>
      <br />
      <input type="email" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
      name='email'
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.email && formik.touched.email && (<p className="text-danger">{formik.errors.email}</p>)}
    <p className='text-danger'>{accountExitMessage}</p>
    </div>
    {/* ///////////////////////password////// */}

    <div className='password'>
      <label>Password</label>
      <br />
      <input type="password" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
      name='password'
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.password && formik.touched.password && (<p className="text-danger">{formik.errors.password}</p>)}
    </div>
    {/* ///////////////////////RePassword////// */}

    <div className='re-password'>
      <label>Re-Password</label>
      <br />
      <input type="password" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
      name='rePassword'
      value={formik.values.rePassword}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.rePassword && formik.touched.rePassword && (<p className="text-danger">{formik.errors.rePassword}</p>)}
    </div>
    {/* ///////////////////////Phone////// */}

    <div className='phone'>
      <label>Phone</label>
      <br />
      <input type="tel" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
      name='phone'
      value={formik.values.phone}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.phone && formik.touched.phone && (<p className="text-danger">{formik.errors.phone}</p>)}
    </div>

    <div className='Form-button w-100'>
      <button type="submit" className='btn w-100'>Sign Up</button>
    </div>
   </form>
   </div>
   </div>
    </>
  )
}
