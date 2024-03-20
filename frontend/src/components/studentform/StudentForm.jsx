import React from 'react'

const StudentForm = () => {
  return (
    <div className='  bg-red-200 mt-28 w-[50%] m-auto'>

        

<form class=" bg-white rounded-lg p-20 shadow-2xl">
    <div className='flex gap-5  justify-between'>
  <div class="mb-5 flex-1">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
    <input type="text" id="firstname" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  shadow-md-light" placeholder="First name" required />
  </div>
  <div class="mb-5 flex-1">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
    <input type="text" id="lastname" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  shadow-md-light" placeholder="Last name" required />
  </div>
    </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Father Name</label>
    <input type="text" id="fathername" placeholder='Father name' class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md-light" required />
  </div>

  <div className='flex gap-5 mb-5 justify-between'>
  <div class=" flex-1">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Father Number</label>
    <input type="text" id="fathernumber" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  shadow-md-light" placeholder="Father number" required />
  </div>
  <div className="flex-1">
  <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Class</label>
  <select id="class" class="bg-white shadow-md p-2.5 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ">
    <option>class 1 </option>
    <option>class 2</option>
    <option>class 3</option>
    <option>class 4</option>
  </select>
  </div>

    </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
</form>


    </div>
  )
}

export default StudentForm