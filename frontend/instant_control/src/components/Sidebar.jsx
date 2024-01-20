import { MdDashboard } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useState } from "react";


var links = [
    {
        id: 1,
        name: 'Dashboard',
        addr: '/dashboard',
        icon: <MdDashboard className="text-primary font-semibold text-2xl group-hover:text-white" />
    },
    {
        id: 2,
        name: 'Newslatter',
        addr: 'newslatters',
        icon: <IoIosMail className="text-primary font-semibold text-2xl group-hover:text-white" />
    },
    {
        id: 3,
        name: 'Contact Form',
        addr: 'contacts',
        icon: <MdContactMail className="text-primary font-semibold text-2xl group-hover:text-white" />
    },
    {
        id: 4,
        name: 'Booking',
        addr: 'booking',
        icon: <BiSolidPurchaseTag className="text-primary font-semibold text-2xl group-hover:text-white" />
    },
    {
        id: 5,
        name: 'Gallery',
        addr: 'gallery',
        icon: <RiGalleryFill className="text-primary font-semibold text-2xl group-hover:text-white" />
    },
]



const Sidebar = () => {
    const [openNav, isOpen] = useState(false);

    const smallScreen = <>
     <nav className="w-[60vw] lg:w-full h-full bg-gray-100 text-primary fixed z-50 lg:block top-0">
            <div className="w-full h-fit border-b-2 border-b-primary/10 py-7">
                <h1 className="text-secondary font-semibold text-center text-4xl">INSTANT</h1>
            </div>
            <div className="w-full h-fit py-10 flex flex-col items-center justify-around">
                <div className="w-fit mx-auto">
                    {links.map(link => (
                      <div key={link.id} className="flex items-center justify-start w-full my-4 group hover:bg-primary p-2 rounded hover:text-white">
                        {link.icon}
                        <NavLink to={link.addr} className={({ isActive }) => {
                            return "mx-2 font-semibold text-xl h-full w-full group-hover:text-white" +
                            (isActive ? "w-full h-full p-2 rounded bg-primary text-white" : "text-white")
                        }}>{link.name}</NavLink>
                        </div>
                    ))}
                </div>
                <div className="p-5 rounded-md bg-white flex flex-col min-w-[70%]">
                    <div className="flex items-end justify-center pb-3">
                        <div className="w-10 h-10 bg-primary text-white rounded-full grid place-items-center mx-2">IMG</div>
                        <p className="font-semibold text-base">User`s name</p>
                    </div>
                    <NavLink to='adduser' className="text-lg mx-auto">Add users</NavLink>
                    <NavLink to='settings' className="text-lg mx-auto">Settings</NavLink>
                    <button className="text-lg font-semibold text-red-600">LOG OUT</button>
                </div>
            </div>
        </nav>
    </>;


    function toggleOpen() {
        isOpen(!openNav);
    }






// "w-full h-full bg-gray-100 text-primary absolute lg:block"
    
    return ( <>
    <button className="absolute lg:hidden top-3 right-3 text-2xl font-bold z-30" onClick={toggleOpen}>MENU</button>
    <nav className="w-full h-full bg-gray-100 text-primary hidden lg:block relative">
        <div className="w-full h-fit border-b-2 border-b-primary/10 py-7">
            <h1 className="text-secondary font-semibold text-center text-4xl">INSTANT</h1>
        </div>
        <div className="w-full h-fit py-10 flex flex-col items-center justify-around">
            <div className="w-fit mx-auto">
                {links.map(link => (
                  <div key={link.id} className="flex items-center justify-start w-full my-4 group hover:bg-primary p-2 rounded hover:text-white">
                    {link.icon}
                    <NavLink to={link.addr} className={({ isActive }) => {
                        return "mx-2 font-semibold text-xl h-full w-full group-hover:text-white" +
                        (isActive ? "w-full h-full p-2 rounded bg-primary text-white" : "text-white")
                    }}>{link.name}</NavLink>
                    </div>
                ))}
            </div>
            <div className="p-5 rounded-md bg-white flex flex-col min-w-[70%]">
                <div className="flex items-end justify-center pb-3">
                    <div className="w-10 h-10 bg-primary text-white rounded-full grid place-items-center mx-2">IMG</div>
                    <p className="font-semibold text-base">User`s name</p>
                </div>
                <NavLink to='adduser' className="text-lg mx-auto">Add users</NavLink>
                <NavLink to='settings' className="text-lg mx-auto">Settings</NavLink>
                <button className="text-lg font-semibold text-red-600">LOG OUT</button>
            </div>
        </div>
    </nav>
    {openNav ? smallScreen : null}
    </> );
}
 
export default Sidebar;