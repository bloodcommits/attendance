import React from 'react'
import { Link } from 'react-router-dom'

const SidebarButton = ({
    title , link
}) => {
  return (
 
    <Link to={link} className=' hover:rounded-md text-base items-center hover:opacity-100 hover:bg-blue-600 px-4 py-5 font-medium border-b-[1px]'>
    <button className='font-bold'>
{title}
    </button>
    </Link>

    )
}

export default SidebarButton