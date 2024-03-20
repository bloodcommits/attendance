import React, { useEffect } from 'react'
const StudnetStatus =  ({name , status}) => {





  return (
   
    <div className="border-2 shadow-md justify-between flex py-3 px-5 items-center bg-white ">
        <div className="flex items-center gap-5 ">
          <img
            src="https://api.dicebear.com/8.x/big-smile/svg"
            className="h-10 w-10"
            alt=""
          />
          <span className="font-bold">{name}</span>
        </div>
 {status=="present"?
        <div className="py-3 px-4 border-solid border-2 bg-blue-200 rounded-lg ">
            {status}
        </div>:
        <div className="py-3 px-4 border-solid border-2 bg-red-200 rounded-lg ">
        {status}
    </div>
        }
      </div>
  )
}

export default StudnetStatus