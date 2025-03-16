import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {loading,login}=useLogin()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(username,password);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="p-6 h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-0 border-gray-100">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                <label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
                            value={username}
                            onChange={e=>setUsername(e.target.value)}
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
						/>
                </div>

                <div>
                <label className='label'>
							<span className='text-base text-left label-text'>Password</span>
						</label>
						<input
							type='password'
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
                </div>


                <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't "} have an account?
                </Link>

                <div>
                    <button 
                    disabled={loading}
                    className='btn btn-block btn-sm mt-2'>
                        {loading?<span className='loading loading-spinner'></span>:"Login"}
                    </button>


                </div>
            </form>
            
        </div>
    </div>
  )
}

export default Login
