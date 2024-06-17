import { MdDashboard } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import Cookies from 'js-cookie';
import axios from "axios";

import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";

import { Badge } from 'primereact/badge';
import io from 'socket.io-client';

import camp from '../assets/camp.jpg';
// import Cookies from 'js-cookie';


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




const Sidebar = ({ onLogout }) => {
    const [openNav, isOpen] = useState(false);


    const Logout = () => {
        const token = '';
        onLogout(token);
        Cookies.remove('token');
    }

    const [username, setUsername] = useState('');

  useEffect(() => {
    // Replace with the user's ID or other identifier
    const userId = Cookies.get('userID');
    
    // Make a request to the server for the username
    axios.get(`http://localhost:8080/get-username?userId=${userId}`)
      .then(response => {
        // If the request was successful, set the username in the state
        setUsername(response.data.user.username);
        // console.log(response.data.user.username);
      })
      .catch(error => {
        console.error('Error fetching username', error);
      });
  }, []);

  
  const [deletedFilesCount, setDeletedFilesCount] = useState(0);
  const ENDPOINT = 'http://localhost:8080';
const socket = io(ENDPOINT);

    useEffect(() => {
        // Listen for the file_deleted event
        socket.on('file deleted', () => {
            setDeletedFilesCount((prevCount) => prevCount + 1);
            // Cookies.set('Count', Count, { expires: 100 });
            //Continue from here(Trying to get the deleteFileCount to not change after page refresh)
            //Heres what your trying to do
            //---save the count in locatestorage upon every change
            //---Then test to see if the state stays on all users even after page refresh.
            console.log('State updated.........')
        });

        // Cleanup on component unmount
        return () => {
            socket.off('file deleted');
        };
    }, []);
    const ResetCounter = () => {
        setDeletedFilesCount(0);
    }

    const smallScreen = <>
     <nav className="w-[60vw] lg:w-full h-full bg-gray-100 text-primary fixed z-50 lg:block top-0">
            <div className="w-full h-fit border-b-2 border-b-primary/10 py-7">
                <h1 className="text-secondary font-semibold text-center text-2xl">INSTANT</h1>
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
                        
                        {username ? (<div className="flex flex-col items-center justify-center"><p className="font-semibold text-sm text-gray-500">welcome</p><p className="font-semibold text-lg text-primary uppercase">{username}</p></div>) : (<marquee direction="left" className="text-sm text-red-500">Please refresh the page or check your internet connection..</marquee>)}
                    </div>
                    <NavLink to='adduser' className="text-lg mx-auto">Add users</NavLink>
                    <NavLink to='settings' className="text-lg mx-auto">Settings</NavLink>
                    <button className="text-lg font-semibold text-red-600" onClick={Logout}>LOG OUT</button>
                </div>
            </div>
        </nav>
    </>;


    function toggleOpen() {
        isOpen(!openNav);
    }

// "w-full h-full bg-gray-100 text-primary absolute lg:block"
    
    return ( <>
    <div className="w-[50%] lg:w-full h-full lg:h-fit my-auto flex items-center justify-center py-2 px-4">
        <NavLink to='messages' className="text-2xl mx-2 text-primary">
            <BiMessageRounded />
        </NavLink>
        <NavLink to='notifications' className="text-2xl mx-2 text-primary relative" onClick={ResetCounter}>
            <MdOutlineNotifications />
            <Badge value={deletedFilesCount} severity="danger" className="bg-red-500 text-white p-1 rounded-full absolute -top-[50%] -right-[30%] text-xs"></Badge>
        </NavLink>
    </div>
    <button className="absolute lg:hidden top-[50%] translate-y-[-50%] right-3 z-30" onClick={toggleOpen}>{openNav ? <MdClose className="text-3xl font-bold text-primary" /> : <MdOutlineMenu className="text-3xl font-bold text-primary" />}</button>
    <nav className="w-full h-full bg-gray-100 text-primary hidden lg:block relative">
        <div className="w-full h-fit border-b-2 border-b-primary/10 py-3">
            <h1 className="text-secondary font-semibold text-center text-3xl">INSTANT</h1>
        </div>
        <div className="w-full h-fit py-5 flex flex-col items-center justify-around">
            <div className="w-fit mx-auto">
                {links.map(link => (
                  <div key={link.id} className="flex items-center justify-start w-full my-3 group hover:bg-primary p-2 rounded hover:text-white">
                    {link.icon}
                    <NavLink to={link.addr} className={({ isActive }) => {
                        return "mx-2 font-semibold text-base h-full w-full group-hover:text-white" +
                        (isActive ? "w-full h-full p-2 rounded bg-primary text-white" : "text-white")
                    }}>{link.name}</NavLink>
                    </div>
                ))}
            </div>
            <div className="p-3 rounded-md bg-white flex flex-col min-w-[70%] mx-2">
                <div className="flex items-end justify-center pb-2">
                    <img src={camp} alt="man sitting" className="w-10 h-10 bg-primary text-white rounded-full mx-2 object-cover" />
                    {username ? (<div className="flex flex-col items-center justify-center"><p className="font-semibold text-sm text-gray-500">welcome</p><p className="font-semibold text-lg text-primary uppercase">{username}</p></div>) : (<marquee direction="left" className="text-sm text-red-500">Please refresh the page or check your internet connection..</marquee>)}
                </div>
                <NavLink to='adduser' className="text-base mx-auto">Add users</NavLink>
                <NavLink to='settings' className="text-base mx-auto">Settings</NavLink>
                <button className="text-base font-semibold text-red-600" onClick={Logout}>LOG OUT</button>
            </div>
        </div>
    </nav>
    {openNav ? smallScreen : null}
    </> );
}


Sidebar.propTypes = {
    onLogout: PropTypes.func.isRequired,
    // username: PropTypes.func.isRequired,
  }; 
export default Sidebar;