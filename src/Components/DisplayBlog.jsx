import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';

const DisplayBlog = () => {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const data = [];
    for (let i=0; i<localStorage.length;i++) {
      const key=localStorage.key(i); // Get key by index
      const value=localStorage.getItem(key); // Get value by key
      try {
        data.push({ key, value: JSON.parse(value) }); // Parse JSON value if possible
      } catch {
        data.push({ key, value }); // Use raw value if not JSON
      }
    }
    // console.log(storedData);
    setStoredData(data); // Update state with the retrieved data
  }, []);
    // useEffect(()=>{
    //   console.log(storedData);
    // },[storedData])

  return (
    <div className=''>
      {storedData.length === 0 ? (
        <p className='w-auto text-7xl font-bold mx-auto p-10'>No blogs to display...</p>
      ) : (
        storedData.map((item, index) => (
          <SingleBlog key={index} storedData={item} />
        ))
      )}
    </div>  
  );
};

export default DisplayBlog;