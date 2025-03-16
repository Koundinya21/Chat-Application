import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="p-6 h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-0 border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up<span className='text-blue-500'>ChatApp</span>
        </h1>

        <form>
            <div>
                <label className='label p-2'>
                    <span className='test-base label-text'>Full Name</span>
                </label>
                <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>
                        <span className='test-base label-text'>UserName</span>
                </label>
                <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <label className='label '>
                        <span className='test-base label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enteer Password' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>
                        <span className='test-base label-text'>Confirm Passowrd</span>
                </label>
                <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
            </div>

            <GenderCheckbox/>

            <a href="#" className='text-sm hover:underline hover:text-bluw-600 mt-2 inline-block'>
                Already have an account?
            </a>

            <div>
                <button className='btn btn-block btn-sm mt-2'>Sing Up</button>
            </div>
        </form>

      </div>
    </div>
  )
}

export default SignUp
