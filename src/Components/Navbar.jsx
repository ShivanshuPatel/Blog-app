import { NavLink} from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className=' flex justify-between bg-white shadow-purple-600 shadow-lg w-full h-full'>
      <NavLink to="/" className="w-16 ml-6 h-9 rounded-md"><img src={logo} alt='blogs'/></NavLink>
    <div className='flex gap-10 p-2 font-bold text-lg'>
        <NavLink to="/" className='bg-purple-500 rounded-lg w-32 p-2 text-center hover:bg-purple-300 hover:text-black text-white transition-all hover:scale-110 duration-200'>
            Home
        </NavLink >
        
        <NavLink to="/Blogs" className='bg-purple-500 rounded-lg w-32 p-2 text-center hover:bg-purple-300 transition-all hover:scale-110 duration-200 hover:text-black text-white'>
            Blogs
        </NavLink>
        
        <NavLink to="/Contact" className='bg-purple-500 rounded-lg p-2 w-32 transition-all hover:scale-110 duration-200 text-center hover:bg-purple-300 hover:text-black text-white'>
            Contact
        </NavLink>
      </div>
        <div className='flex gap-10 pr-7 mt-2 font-bold text-lg'>
          <NavLink to="/Signup"><button className='shadow-lg shadow-black bg-purple-500 rounded-lg p-2 w-32 text-center transition-all hover:scale-110 duration-200 hover:bg-purple-300  hover:text-black text-white'>SignUp</button></NavLink>
          <NavLink to='/Login'><button className='shadow-lg shadow-black bg-purple-500 rounded-lg p-2 w-32 text-center hover:bg-purple-300 transition-all hover:scale-110 hover:text-black text-white duration-200'>Login</button></NavLink>
        </div>

    
    </div>
  )
}

export default Navbar