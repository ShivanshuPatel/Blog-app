import React from 'react'
const SingleBlog = ({storedData}) => {
  // console.log("hiiii",storedData); 
  return (
    <div className='p-10'> 
    <div className=' bg-purple-200 flex flex-col justify-center rounded-xl shadow-lg shadow-purple-950 p-5 items-center'> 
        <p className='font-bold text-3xl mt-5 p-2'> {storedData.value.blogTitle}</p>
        <img src={storedData.value.image} className='p-2 w-52 aspect-square shadow-lg shadow-purple-500'/>
        <p className='text-sm font-serif p-5 content-center text-purple-900  h-auto'>{storedData.value.BlogDescription}</p>
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
