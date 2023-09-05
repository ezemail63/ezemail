"use client"
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from 'next/font/google';
import { React,useState } from 'react';
import axios from 'axios';

const roboto=Roboto({
  weight:'900',
  subsets:['latin'],
  display:'swap'
})
const robotolight=Roboto({
  weight:'700',
  subsets:['latin'],
  display:'swap'
})


function Login() {
  const [inputData, setInputData] = useState({
    email:'',
    password:''
  });
  const handleChange =(event)=> {
    const {name, value} = event.target;
    // console.log('hlo', value)
    setInputData((valuePre)=>{
   return{
     ...valuePre,
     [name]:value
   }
 });

  }
  const submitLogin =(e)=> {

    let formData = new FormData();

    // Adding files to the formdata
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);

    axios({

        // Endpoint to send files
        url: "http://localhost:8080/files",
        method: "POST",
        headers: {

            // Add any auth token here
            authorization: "your token comes here",
        },

        // Attaching the form data
        data: formData,
    })

        // Handle the response from backend here
        .then((res) => { })

        // Catch errors if any
        .catch((err) => { });
}

  return (
<>
<Head>
</Head>

  <div className="container">
     <div className="row">
        <div className="col-md-12">
           <div className="login-form ">
             <form  className="login ">
                <h1 className={roboto.className}>Log In To LMS</h1> 
                <input type="text" placeholder="User Name"  name="email" value={inputData.email} onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" value={inputData.password} onChange={handleChange} />
                <button className={robotolight.className} type="button" onClick={()=>{
                  submitLogin()
                }}>Log In</button>
              </form>
            </div>  
        </div>
     </div>
    </div>
</>

  );
}

export default Login;

