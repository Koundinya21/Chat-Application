import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
    const [input,setInput]=useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''

    })


    const handleCheckBoxChange=(gender)=>{
        setInput({...input,gender});
    }

    const {loading,signup}=useSignup();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await signup(input)
    }
  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="p-6 h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-0 border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up<span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='test-base label-text'>Full Name</span>
                </label>
                <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' 
                    value={input.fullName}
                    onChange={(e)=>setInput({...input,fullName:e.target.value})}
                />
            </div>

            <div>
                <label className='label p-2'>
                        <span className='test-base label-text'>UserName</span>
                </label>
                <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10' 
                    value={input.username}
                    onChange={(e)=>setInput({...input,username:e.target.value})}
                />
            </div>

            <div>
                <label className='label '>
                        <span className='test-base label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enteer Password' className='w-full input input-bordered h-10' 
                    value={input.password}
                    onChange={(e)=>setInput({...input,password:e.target.value})}
                />
            </div>

            <div>
                <label className='label p-2'>
                        <span className='test-base label-text'>Confirm Passowrd</span>
                </label>
                <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' 
                    value={input.confirmPassword}
                    onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}
                />
            </div>

            <GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={input.gender}/>

            <Link to="/login" className='text-sm hover:underline hover:text-bluw-600 mt-2 inline-block'>
                Already have an account?
            </Link>

            <div>
                <button
                disabled={loading}
                className='btn btn-block btn-sm mt-2'>
                    {loading ?<span className='loading loading-spinner'></span>:"Sign Up"}
                </button>
            </div>
        </form>

      </div>
    </div>
  )
}

export default SignUp
