import React from 'react'
import { toast } from 'react-toastify';
import imagelogo from "../assets/cloud-computing.png"




const Blogs = () => {
  
  function submitHandler(){
   toast("Blog is Added");
  }

  return (
    <div  className='mt-11' >
      <form className='bg-purple-100 h-auto w-[45%] mx-auto flex flex-col'>
        <h1 className='text-purple-900 mt-4 text-xl font-bold mx-auto' >Add Your Blog Here !...</h1>
        <div className='flex gap-14 p-5'>
          <label className='text-purple-900 font-bold mt-1'>Blog Title</label>
           <input type='text' className='bg-purple-200 p-3 rounded-md w-96 h-8 text-purple-900 text-lg font-semibold outline-purple-600' placeholder='Blog Title' ></input>
        </div>
        
        <div className='flex gap-10 p-5'>
        <label className='text-purple-900 font-bold'>Description</label>
        <textarea type='text' placeholder='Desription' className='bg-purple-200 p-4 rounded-md w-96 h-28 text-purple-900 text-lg font-semibold outline-purple-600'></textarea>
        </div>
        
        <div className='bg-purple-200 w-auto mt-5 ml-36 p-3 mb-4 mx-auto h-28 rounded-lg text-gray-500'> 
            {/* <label>Choose a Thumbnail</label> */}
            <img src={imagelogo} className='h-8 mx-auto'></img> 
            <input type='file' className='mt-5'></input>
        </div> 
        
        <div className='mx-auto mb-8 mt-5'>
          <button onClick={submitHandler} className='bg-purple-500 rounded-lg p-2 w-32 text-center transition-all hover:scale-110 duration-200 hover:bg-purple-300  hover:text-black text-white font-bold shadow-lg shadow-black'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Blogs