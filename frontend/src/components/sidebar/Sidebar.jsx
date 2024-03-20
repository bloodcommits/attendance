import React from "react";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div
      className="bg-[#1C2434] w-[288px] flex flex-col text-white gap-10 h-screen sticky top-0 px-4 py-2"
    >
      <p className="text-2xl my-10 px-4 py-2">Attendance Panel</p>

      <SidebarButton title="Take Attendance" link="/" />
      <SidebarButton title="Fetch Attendance" link="/fetchattendance" />
      <SidebarButton title="Add Student" link="/addstudent" />
      <SidebarButton title="Calander" link="/" />
    </div>
  );
};

export default Sidebar;
