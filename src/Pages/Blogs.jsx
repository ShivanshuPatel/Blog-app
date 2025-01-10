import React, { useState } from 'react'
import imagelogo from "../assets/cloud-computing.png"
import Home from './Home';
import DisplayBlog from '../Components/DisplayBlog';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

const Blogs = () => {
const theme = useSelector(state => state.theme);

  const [blogData,setblogData] = useState({
    blogTitle:"",
    BlogDescription:"",
    image:null,
  });
  
function changeHandler(event){
  const {name,value} = event.target;
   setblogData({
       ...blogData,
      [name] : value,
  })
}
  
  function submitHandler(e){
    e.preventDefault()
    if(blogData.image && blogData.blogTitle && blogData.BlogDescription){
    localStorage.setItem(blogData.blogTitle,JSON.stringify(blogData));
    // alert("data is stored in local storage");
    toast("data is Saved in localStorage");

  }else{
    toast("All FIels Are Required")
    // alert("All Fields Are Required")
  }

    console.log(blogData);
  }

  function imageHandler(e){
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setblogData(() => ({
          ...blogData,
          image: reader.result, 
        }));
      };
      reader.readAsDataURL(file); 
    }
}



  return (
    <div  className={`${theme === "dark" ? 'bg-slate-900' : "bg-purple-50"}`} >
     {/* <div> */}
      <form onSubmit={submitHandler} className={`bg-purple-100 h-auto w-[45%] mx-auto flex flex-col rounded-lg ${theme === "dark" ? 'bg-slate-900 border-2 border-white' : "bg-purple-50 border-2 border-purple-950"}`}>
        <h1 className='text-purple-900 mt-4 text-xl font-bold mx-auto' >Add Your Blog Here !...</h1>
        <div className='flex gap-14 p-5'>
          <label className='text-purple-900 font-bold mt-1'>Blog Title</label>
           <input name='blogTitle' type='text' onChange={changeHandler} value={blogData.blogTitle} className='bg-purple-200 p-3 rounded-md w-96 h-8 text-purple-900 text-lg font-semibold outline-purple-600' placeholder='Blog Title' ></input>
        </div>
        
        <div className='flex gap-10 p-5'>
        <label className='text-purple-900 font-bold'>Description</label>
        <textarea name='BlogDescription' type='text'  value={blogData.BlogDescription} onChange={changeHandler} placeholder='Desription' className='bg-purple-200 p-4 rounded-md w-96 h-28 text-purple-900 text-lg font-semibold outline-purple-600'></textarea>
        </div>
        
        <div className='bg-purple-200 w-auto mt-5 ml-36 p-3 mb-4 mx-auto h-28 rounded-lg text-gray-500'> 
            {/* <label>Choose a Thumbnail</label> */}
            <img src={imagelogo} className='h-8 mx-auto'></img> 
            <input type='file' name='image' value={blogData.url} onChange={imageHandler} className='mt-5'></input>
        </div> 
        
        <div className='mx-auto mb-8 mt-5'>
          <button type='submit' className={`bg-purple-500 rounded-lg p-2 w-32 text-center transition-all hover:scale-110 duration-200 hover:bg-purple-300  hover:text-black text-white font-bold shadow-lg shadow-black ${theme === "dark" ? 'bg-slate-900 text-white' : "bg-white text-black"}`}>Add</button>
        </div>
        {/* <img src={blogData.url} className='w-28 h-40'></img> */}
      </form>
      <DisplayBlog/>
      <ToastContainer/>
    </div>
  )
}

export default Blogs