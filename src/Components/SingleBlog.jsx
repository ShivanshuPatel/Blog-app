import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
const SingleBlog = ({storedData,onDelete}) => {
  const themeState = useSelector(state=> state.theme)
  // console.log("hiiii",storedData); 
     const location=  useLocation()
  return (

    <div className='p-10'> 

    <div className={` relative bg-purple-200 flex flex-col justify-center rounded-xl shadow-lg shadow-purple-950 p-5 items-center ${themeState === "dark" ? 'bg-slate-600' : "bg-purple-50"}`}> 
       {
      (location.pathname === '/Blogs') ? <button onClick={onDelete} className={`top-10 right-16 absolute bg-slate-900 rounded-lg  text-white p-2`}>Delete</button> : null
        }
        <p className={`font-bold text-3xl mt-5 p-2 ${themeState === "dark" ? 'text-white' : "text-purple-600"}`}> {storedData.value.blogTitle}</p>
        <img src={storedData.value.image} className='p-2 w-52 aspect-square shadow-lg shadow-purple-500'/>
        <p className={`text-sm font-serif p-5 content-center text-purple-900  h-auto ${themeState === "dark" ? 'text-white' : "text-purple-600"}`}>{storedData.value.BlogDescription}</p>
        
    </div>
      
    </div>
)
}

export default SingleBlog

// import React, { useState } from "react";

// const SingleBlog = ({ storedData }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Truncate content logic
//   const previewLimit = 100; // Number of characters for truncation
//   const description = storedData.value.BlogDescription || ""; // Fallback in case BlogDescription is undefined
//   const isLongContent = description.length > previewLimit;

//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="p-10">
//       <div className="bg-purple-200 flex flex-col justify-center rounded-xl shadow-lg shadow-purple-950 p-5 items-center">
//         <p className="font-bold text-3xl mt-5 p-2">
//           {storedData.value.blogTitle}
//         </p>
//         <img
//           src={storedData.value.image}
//           alt="Blog Thumbnail"
//           className="p-2 w-52 aspect-square shadow-lg shadow-purple-500"
//         />
//         <p className="text-sm font-serif p-5 text-purple-900 h-auto">
//           {isExpanded || !isLongContent
//             ? description
//             : `${description.slice(0, previewLimit)}...`}
//         </p>
//         {isLongContent && (
//           <button
//             className="text-purple-600 underline text-xs mt-2"
//             onClick={toggleReadMore}
//           >
//             {isExpanded ? "Read Less" : "Read More"}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SingleBlog;
