import camp from '../assets/camp.jpg'
// import io from 'socket.io-client';
import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
import axios from 'axios';

// const ENDPOINT = 'http://localhost:8080';


const Notifications = () => {


    const [notice, setNotice] = useState([]);

  useEffect(() => {
    // Fetch emails from the backend when the component mounts
    axios.get('http://localhost:8080/api/notifications')
      .then(response => {
        setNotice(response.data);
        // console.log(contact)
      })
      .catch(error => {
        console.error('Error fetching emails:', error);
      });
  }, [notice]);

// const [notice, setNotice] = useState('');
// const [username, setUsername] = useState('');
// const socket = io(ENDPOINT);

// useEffect(() => {
//     const userId = Cookies.get('userID');
      
//     axios.get(`http://localhost:8080/get-username?userId=${userId}`)
//       .then(response => {
//         setUsername(response.data.user.username);
//         setNotice('Deleted an Email.');
//       })
//         .catch(error => {
//             console.error('Error fetching username', error);
//         });
//   }, []);

//   useEffect(() => {
//     socket.on('connect', () => {
//         console.log('Socket Connected to server');
//       });
      
//       socket.on('connect_error', (error) => {
//         console.log('Socket Connection error:', error);
//       });
//     // Emit the 'file deleted' event to the server after fetching username
//     socket.on("file deleted", (data) => {
//         console.log(data);
//     })
//     socket.emit("file deleted", { username, notice});
  
//     return () => {
//     socket.disconnect();
//     console.log('Socket disconnected')
//     };
//   }, [])
  
    return ( 
        <section className="w-full h-fit p-5 bg-gray-200 block lg:absolute top-0 left-0">
            <h1 className="text-center font-semibold text-xl lg:text-2xl" draggable='true'>Notifications</h1>
            <div className="w-full h-fit flex flex-col items-center justify-center">
                {notice.length > 0 ? (
                    notice.map(notice => (
                        <div key={notice._id} className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-secondary hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">{notice.username}</h3>
                            {/* <p className="text-base text-gray-500">owner</p> */}
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">{notice.notice}</h4>
                        {/* <p className="text-base text-gray-500">John was added by Ecode</p> */}
                    </div>
                </div>
                    ))
                    
                )
                 : (
                    <div className='h-full w-full flex items-center justify-center'>
                    <h1 className='text-3xl text-primary text-center'>OOPS.. No data to show here!!</h1>
                  </div>
                )}
                

                {/* <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-green-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">John</h3>
                            <p className="text-base text-gray-500">photographer</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new image</h4>
                        <p className="text-base text-gray-500">An image was added by John</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-red-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Mike</h3>
                            <p className="text-base text-gray-500">marketing</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Sent a newslatter</h4>
                        <p className="text-base text-gray-500">Mike sent a newslatter to all users</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-blue-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Rose</h3>
                            <p className="text-base text-gray-500">co-owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">Paul was added by Rose</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-secondary hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Ecode</h3>
                            <p className="text-base text-gray-500">owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">Faith was added by Ecode</p>
                    </div>
                </div>


                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-secondary hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Ecode</h3>
                            <p className="text-base text-gray-500">owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">John was added by Ecode</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-green-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">John</h3>
                            <p className="text-base text-gray-500">photographer</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new image</h4>
                        <p className="text-base text-gray-500">An image was added by John</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-red-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Mike</h3>
                            <p className="text-base text-gray-500">marketing</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Sent a newslatter</h4>
                        <p className="text-base text-gray-500">Mike sent a newslatter to all users</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-blue-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Rose</h3>
                            <p className="text-base text-gray-500">co-owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">Paul was added by Rose</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-secondary hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Ecode</h3>
                            <p className="text-base text-gray-500">owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">Faith was added by Ecode</p>
                    </div>
                </div> */}
            </div>
        </section>
     );
}
 
export default Notifications;