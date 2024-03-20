import React from "react";

const StudentCard = ({name , className}) => {
  return (
    <div class="max-w-xs  bg-white shadow-md rounded-lg overflow-hidden">
      <img
        class="w-full h-48 object-cover object-center rounded-t-lg"
        src="https://api.dicebear.com/8.x/big-smile/svg"
        alt="avatar"
      />
      <div class="p-4">
        <h1 class="text-gray-900 font-bold text-xl mb-2">{name}</h1>
        <p className="text-lg">{className}</p>
        <div className="flex gap-2 mt-5">
          <button className=" py-3 px-4 border-solid border-2 bg-blue-200 rounded-lg ">
            Present
          </button>
          <button className=" py-3 px-4 border-solid border-2 bg-red-200 rounded-lg ">
            Absent
          </button>
          <button className=" py-3 px-4 border-solid border-2 bg-yellow-200 rounded-lg ">
            Leave
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
