import  { useState } from 'react'
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

const FetchTopbar = () => {

    const [value , setvalue] = useState("");
    const [date , setdate] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
  
  
    const [year, month, day] = date.split('-')
  
  
    const handlesubmit =(e)=>{
      e.preventDefault();
    //   console.log(value)
    if(!value && !date){
        toast.error("Fill both entries")
        return
    }  
    }


  return (
    <form onSubmit={handlesubmit}>
    <div className="flex w-full  justify-between pr-7 mb-5">
        <div className="flex gap-5  ">
          <div className='items-center'>
  <select onChange={(e)=>{setvalue(e.target.value)}} value={value} id="class" class="bg-white shadow-md py-4 px-6 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ">
    <option>class 1 </option>
    <option>class 2</option>
    <option>class 3</option>
    <option>class 4</option>
  </select>
          </div>
          <input type="date" onChange={(e)=>setdate(e.target.value)} className="py-3 px-5 rounded-lg shadow-md " />
        </div>
        <button type='sumbit' className="bg-green-400 py-3 px-4  rounded-lg shadow-md items-end ">
         Show data
         
        </button>
      </div>
    </form>

  )
}

export default FetchTopbar