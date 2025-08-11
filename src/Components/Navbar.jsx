import React, { useEffect, useState } from 'react'
import '../index.css'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const Navbar = () => {
  const location = useLocation()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
  }

  return (
    <nav className='flex top-0 justify-between pr-2 pl-1 items-center bg-gray-250'>
      <div className='flex items-center'>
        <NavLink to='/'>
          <img src={logo} alt="FundFlo logo" className='h-10 w-10 mr-1' />
        </NavLink>
        <h1>
          <NavLink 
            to='/' 
            className="font-poppins font-bold text-4xl"
          >
            FundFlo
          </NavLink>
        </h1>
      </div>
      
      {!isAuthPage && (
        <div className='flex gap-9 right-5 items-center'>
          <NavLink
            to='/investors'
            className={({ isActive }) =>
              "font-sans font-extralight text-xl tracking-normal p-2 pt-4 inline-block hover:border-b-2 hover:border-b-violet-400 " +
              (isActive ? "border-b-2 border-b-blue-500" : "")
            }
          >
            For investors
          </NavLink>
          <NavLink
            to='/companies'
            className={({ isActive }) =>
              "font-sans font-extralight text-xl tracking-normal p-2 pt-4 inline-block hover:border-b-2 hover:border-b-violet-400 " +
              (isActive ? "border-b-2 border-b-blue-500" : "")
            }
          >
            For companies
          </NavLink>

          {/* If logged in, show name & logout; else show login/signup */}
          <div className='pt-2 flex items-center'>
            {user ? (
              <>
                <span className="font-medium mr-4">
                  Welcome, {user.displayName || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className='inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-red-500 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  role='button'
                  tabIndex={0}
                  to='/login'
                  className='inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-blue-500 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                >
                  Login
                </NavLink>
                <span className="mx-2 text-gray-400 select-none">•</span>
                <NavLink
                  role='button'
                  tabIndex={0}
                  to='/signup'
                  className='inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-blue-500 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
