import { MdDashboard } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";
import { Link } from "react-router-dom";


var links = [
    {
        id: 1,
        name: 'Dashboard',
        addr: '/',
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
        id: 1,
        name: 'Booking',
        addr: 'booking',
        icon: <BiSolidPurchaseTag className="text-primary font-semibold text-2xl group-hover:text-white" />
    },
    {
        id: 1,
        name: 'Gallery',
        addr: 'gallery',
        icon: <RiGalleryFill className="text-primary font-semibold text-2xl group-hover:text-white" />
    },
]

const Sidebar = () => {
    return ( <>
    <nav className="w-full h-full bg-gray-100 text-primary">
        <div className="w-full h-fit border-b-2 border-b-primary/10 py-7">
            <h1 className="text-secondary font-semibold text-center text-4xl">INSTANT</h1>
        </div>
        <div className="w-full h-fit py-10 flex flex-col items-center justify-around">
            <div className="w-fit mx-auto">
                {links.map(link => (
                  <div key={link.id} className="flex items-center justify-start w-full my-4 group hover:bg-primary p-2 rounded">
                    {link.icon}
                    <Link to={link.addr} className="mx-2 font-semibold text-xl group-hover:text-white h-full w-full">{link.name}</Link>
                    </div>
                ))}
            </div>
            <div className="p-5 rounded-md bg-white flex flex-col min-w-[70%]">
                <div className="flex items-end justify-center pb-3">
                    <div className="w-10 h-10 bg-primary text-white rounded-full grid place-items-center mx-2">IMG</div>
                    <p className="font-semibold text-base">User`s name</p>
                </div>
                <button className="text-lg">Add users</button>
                <button className="text-lg">Settings</button>
                <button className="text-lg font-semibold text-red-600">LOG OUT</button>
            </div>
            
                
            
        </div>
    </nav>
    </> );
}
 
export default Sidebar;