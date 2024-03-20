import React from 'react'

const TopInput = ({lefttitle , righttitle}) => {
  return (
    <div className="flex w-full  justify-between pr-7 mb-5">
        <div className="flex gap-5  ">
          <div className='items-center'>
  <select id="class" class="bg-white shadow-md py-4 px-6 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ">
    <option>class 1 </option>
    <option>class 2</option>
    <option>class 3</option>
    <option>class 4</option>
  </select>
          </div>
          <input type="date" className="py-3 px-5 rounded-lg shadow-md " />
         {lefttitle && <button className="bg-indigo-400 py-1 px-4 rounded-lg shadow-md">
            {lefttitle}
          </button>}
        </div>
        <button className="bg-green-400 py-3 px-4  rounded-lg shadow-md items-end ">
         {righttitle}
        </button>
      </div>
  )
}

export default TopInput