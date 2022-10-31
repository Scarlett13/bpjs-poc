import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "../../../utils/staticVariable";

const Sidebar = () => {
    const active = 'bg-indigo-800 hover:bg-indigo-600 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
    const noActive = 'hover:bg-indigo-600 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
    return (
        <div className="flex flex-1 flex-col bg-indigo-700 h-full">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300" alt="Your Company" />
                </div>
                <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Sidebar">
                    {/* <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75" --> */}
                    {
                        sidebarData.map((item, key) => <NavLink className={({ isActive }) =>
                            isActive ? active : noActive
                        } key={key} to={item.path} end={key === 0 ? true : false}>
                            {item.name}
                        </NavLink>)
                    }
                    {/* <a href="#" className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                        <span className="flex-1">Dashboard</span>
                    </a> */}
                </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
                <div className="group block w-full flex-shrink-0">
                    <div className="flex items-center">
                        {/* <div>
                            <img className="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div> */}
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">Version 1.0.0 </p>
                            {/* <p className="text-sm font-medium text-white">Tom Cook</p>
                            <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;