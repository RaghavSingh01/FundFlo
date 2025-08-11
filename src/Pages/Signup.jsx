import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const Signup = () => {
  const navigate = useNavigate()

  // state for form fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      // create account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      // update display name
      await updateProfile(userCredential.user, { displayName: name })

      alert('Signup successful!')
      navigate('/') // redirect after success; change path if needed
    } catch (err) {
      console.error(err)
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div className='flex flex-row gap-20 items-center justify-center h-96 sm:h-64 md:h-80 lg:h-96 pt-20'>
      <div className='flex flex-col items-center'>
        <img src={logo} alt="" className='w-64' />
        <h1 className='text-5xl pb-9 font-poppins font-bold'>FundFlo</h1>
        <p className='text-3xl'>Start your journey with
          an investment or an idea</p>
      </div>
      <form 
        onSubmit={handleSignup}
        className='flex flex-col items-center rounded-xl  border-zinc-600 p-5 sm:h-auto md:h-auto lg:h-auto shadow-2xl'
      >
        <p className='text-2xl pb-3'>Register Here</p>

        <input 
          type="text" 
          placeholder='Enter your name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
          className='p-5 md:w-64 lg:w-80 sm:w-40 lg:h-15 lg:rounded-full mb-3 col-gap-3 hover:bg-blue-200 shadow-md transition-all duration-300 focus:bg-blue-100'
        />

        <input 
          type="email" 
          placeholder='Enter your email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          className='p-5 md:w-64 lg:w-80 sm:w-40 lg:h-15 lg:rounded-full mb-3 col-gap-3 hover:bg-blue-200 shadow-md transition-all duration-300 focus:bg-blue-100'
        />

        <input 
          type="password" 
          placeholder='Enter your password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
          className='p-5 md:w-64 lg:w-80 sm:w-40 lg:h-15 lg:rounded-full mb-3 col-gap-3 hover:bg-blue-200 shadow-md transition-all duration-300 focus:bg-blue-100'
        />

        <br />

        <button 
          type="submit" 
          disabled={loading}
          className='inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-blue-500 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:text-white focus:bg-red-500'
        >
          {loading ? 'Registering...' : 'Submit'}
        </button>

        {error && <p className="text-red-600 mt-2">{error}</p>}

        <p>Already a user?</p>
        <Link to='/login' className='text-blue-500 underline underline-offset-1'>Login</Link>
      </form>
    </div>
  )
}

export default Signup
