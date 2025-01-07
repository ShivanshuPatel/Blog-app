import {Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
function App() {
  return (
<div className='bg-purple-400 min-h-screen w-screen'>
        <Navbar></Navbar>    
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
