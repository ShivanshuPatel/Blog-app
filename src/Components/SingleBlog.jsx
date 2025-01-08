import React from 'react'

const SingleBlog = ({storedData}) => {
  // console.log("hiiii",storedData); 
  return (
    <div className='p-10'>
    <div className=' bg-purple-200 flex flex-col justify-center rounded-xl shadow-lg shadow-purple-950 p-5 items-center'> 
        <p className='font-bold text-3xl mt-5 p-2'> {storedData.value.blogTitle}</p>
        <img src={storedData.value.image} className='p-2 w-52 rounded-md shadow-lg shadow-purple-500'/>
        <p className='text-sm font-serif p-5 content-center h-auto'>{storedData.value.BlogDescription}</p>
    </div>
    </div>
)
}

export default SingleBlog