import { NavLink} from 'react-router-dom'
import logo from "../assets/logo.png"
import { IoSunnyOutline } from 'react-icons/io5'
import { MdDarkMode } from 'react-icons/md'
// import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {changeTheme} from "../Slices/themeSlice"
import { useState } from 'react'

const Navbar = () => {
  const themeState = useSelector(state => state.theme)
    const [themechange,setthemeChange] = useState("light");
    const dispatch = useDispatch();

  const changeThemeColor=(e)=>{
      dispatch(changeTheme((themeState === "light") ? "dark" : "light"))
      setthemeChange(themeState);
    console.log(themeState)
    }


  return (
    <div className={` flex justify-between bg-purple-50 shadow-purple-600 shadow-lg ${themeState === "dark" ? 'bg-slate-900 text-white' :'bg-white' }`}>
      
      <NavLink to="/" className={`w-14 ml-6 mt-2 h-9 rounded-md ${themeState === "dark" ? 'bg-slate-900' : "bg-white"}`}><img src={logo} alt='blogs'/></NavLink>
    <div className='flex gap-10 p-2 font-bold text-lg'>
        <NavLink to="/" className={` rounded-lg w-32 p-2 text-center hover:bg-purple-300 hover:text-black  transition-all hover:scale-110 duration-200 ${themeState === "dark" ? 'bg-slate-900 text-white' : " text-black"}`}>
            Home
        </NavLink>
        
        <NavLink to="/Blogs" className={` rounded-lg w-32 p-2 text-center hover:bg-purple-300 transition-all hover:scale-110 duration-200 hover:text-black ${themeState === "dark" ? 'bg-slate-900 text-white' : " text-black"}`}>
            Blogs
        </NavLink>
        
        <NavLink to="/Contact" className={` rounded-lg p-2 w-32 transition-all hover:scale-110 duration-200 text-center hover:bg-purple-300 hover:text-black ${themeState === "dark" ? 'bg-slate-900 text-white' : " text-black"}`}>
            Contact
        </NavLink>
      </div>
      <button className='text-2xl' onClick={changeThemeColor}>{themeState === "dark" ? <IoSunnyOutline/> : <MdDarkMode className='bg-black text-white p-1 rounded-full'/>}</button>

        <div className='flex gap-10 pr-7 mt-2 font-bold text-lg'>
          <NavLink to="/Signup"><button className={`shadow-lg shadow-black bg-purple-500 rounded-lg p-2 w-32 text-center transition-all hover:scale-110 duration-200 hover:bg-purple-300  hover:text-black ${themeState === "dark" ? 'bg-slate-900 ' : "bg-white text-black"}`}>SignUp</button></NavLink>
          <NavLink to='/Login'><button className={`shadow-lg shadow-black bg-purple-500 rounded-lg p-2 w-32 text-center hover:bg-purple-300 transition-all hover:scale-110 hover:text-black  duration-300 ${themeState === "dark" ? 'bg-slate-900' : "bg-white text-black"}`}>Login</button></NavLink>
        </div>
    
    </div>
  )
}

export default Navbar