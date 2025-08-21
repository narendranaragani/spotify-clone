import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router';
import Cookies from 'js-cookie';

const LoginForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmiterror] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
 
  const navigate = useNavigate()

  const onChangeUserHandler =(event)=>{
      setUsername(event.target.value)
  }

  const onChangePassHandler =(event)=>{
      setPassword(event.target.value)
  }

  const onSuccessEvent = (jwtToken)=>{
    Cookies.set('jwt_token',jwtToken,{expires : 30})
    navigate('/',{replace: true})
  }

  const onFailureEvent = (errorMsg)=>{
      setShowSubmiterror(true)
      setErrorMsg(errorMsg)
  }
  const token = Cookies.get('jwt_token')
  if(token !== undefined){
    return <Navigate to='/' replace/>
  }

  const onSubmitEvent = async (event)=>{
    event.preventDefault();
    const userDetails = {
          username,
          password
    }
    const url = "https://apis.ccbp.in/login"
    const options = {
        method : "POST",
        body : JSON.stringify(userDetails)
    }
    const response =await fetch(url,options)
    const data = await response.json();
    console.log(data)
    if(response.ok == true){
      onSuccessEvent(data.jwt_token)
      console.log("Valid credentials")
    }
    else{
      onFailureEvent(data.error_msg)
      console.log("InValid credentials")
    }
  }

  return (
    <div className='bg-[url(/Group%20138.png)] bg-cover bg-center h-screen w-full flex justify-center items-center'>
      <form className='bg-[#181818] md:w-[450px] md:h-[420px] w-[296px] h-[410px] rounded-md opacity-90' onSubmit={onSubmitEvent}>
      <div>
        <div className='p-2'>
          <div className='md:mt-6 mt-3'>
            <img src="public/music.png" className='w-35 mx-auto'/>
            <h1 className='text-center font-semibold text-white text-2xl'>Spotify Remix</h1>
            <div className='flex flex-col md:mt-6 mt-3'>
                <label className='font-semibold text-white pl-3'>USERNAME</label>
                <input className='md:w-[408px] w-[250px] bg-[#D9D9D9] px-3 py-2 rounded-md m-3 outline-none font-roboto font-semibold' onChange={onChangeUserHandler} value={username} type="text"/>
            </div>
            <div className='flex flex-col'>
                <label className='font-semibold text-white pl-3'>PASSWORD</label>
                <input className='md:w-[408px] w-[250px] bg-[#D9D9D9] px-3 py-2 rounded-md m-3 outline-none' onChange={onChangePassHandler} value={password} type="password"/>
            </div>
          </div>
           <div className='md:ml-0 ml-10'>
            <button type="submit" className='md:w-[408px] w-[150px] bg-green-500 px-3 py-2 rounded-md m-3 outline-none font-semibold text-black cursor-pointer'>Login</button> 
          </div>
          {showSubmitError && <p className='md:ml-3 font-semibold text-red-500 md:pl-0 pl-3'>*{errorMsg}</p>}
         </div> 
      </div>
      </form>
    </div>
  )
}

export default LoginForm
