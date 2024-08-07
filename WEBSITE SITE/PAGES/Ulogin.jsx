import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Header from '../COMMON/Header';
import Footer from '../COMMON/Footer';

function Ulogin() {

    const redirect = useNavigate()

   const [fromvalue ,setformvalue]=useState({
    email:"",
    password:"",
   })

   const getchange=(e)=>{
    setformvalue({...fromvalue,[e.target.name]:e.target.value})
        console.log(fromvalue)
    
   }
//   submit function /
   const submithandle = async(e)=>{
    e.preventDefault()

    const {email ,password} = fromvalue

    if (!email.trim() || !password.trim()) {
        console.log("Email and password pls feild")
        toast.error("Email and password pls feild")
        return false
    }

    // match process 

    try {
        const res = await axios.get(`http://localhost:3000/user?email=${email}`)
        console.log(res.data)

        if (res.data.length === 0) {
            console.log("Email pls correct mathc")
            console.log("Email pls correct match")
            return false
        }
        const user =  res.data[0]
        if(user.password !== password)
        {
            console.error("Password field")
            toast.error("Password field")
            return false
        }
        if(user.status !== "unblock")
            {
                toast.error("Acoount has been block..pls contact support")
                return false
            }

            localStorage.setItem('Uloginid',user.id)
            localStorage.setItem('Uname',user.name)
            
            console.log("login successfull")
            toast.success("login succssfully")
            redirect("/")

    } catch (error) {
        console.error("api worng",error)
    }
   }
  return (
    <div>
    <Header></Header>
       <MDBContainer fluid className="p-3 my-5 h-custom">

                <form action="" onSubmit={submithandle}>
                    <MDBRow>

                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                        </MDBCol>

                        <MDBCol col='4' md='6'>

                            <div className="d-flex flex-row align-items-center justify-content-center">

                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>

                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>

                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='linkedin-in' />
                                </MDBBtn>

                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <MDBInput wrapperClass='mb-4' name='email' value={fromvalue.email} onChange={getchange} label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' name='password' value={fromvalue.password} onChange={getchange} label='Password' id='formControlLg' type='password' size="lg" />

                            <div className="d-flex justify-content-between mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <div className='text-center text-md-start mt-4 pt-2'>
                                <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/uregister" className="link-danger">Register</Link></p>
                            </div>

                        </MDBCol>

                    </MDBRow>
                </form>


            </MDBContainer>
     <Footer></Footer>       
    </div>
  )
}

export default Ulogin
