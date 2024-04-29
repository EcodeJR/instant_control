// import camp from '../assets/camp.jpg'
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Cookies from 'js-cookie';
import axios from 'axios';


const ENDPOINT = 'http://localhost:8080';
const Messages = () => {
    const [response, setResponse] = useState([]);
    const [message, setMessage] = useState('');
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

    const socket = io(ENDPOINT);
    useEffect(() => {
        socket.on('connect', () => {
          console.log('Socket Connected to server');
        });
        
        socket.on('connect_error', (error) => {
          console.log('Socket Connection error:', error);
        });
        socket.on("chat message", data => {
            // setResponse(data);
            console.log(data);
        });
      
        // Other event listeners or logic can be added here
        
        return () => {
          socket.disconnect();
          console.log('Socket disconnected')
        };
      }, []);

      const sendMessage = () => {
        const socket = io(ENDPOINT);
        socket.emit("chat message", { username, message });
        setMessage('');
      };
      useEffect(() => {
        // Fetch emails from the backend when the component mounts
        axios.get('http://localhost:8080/api/messages')
          .then(res => {
            setResponse(res.data);
          })
          .catch(error => {
            console.error('Error fetching messages:', error);
          });
      }, [response]);
    return ( 
        <section className="w-full h-full p-4 bg-primary text-white block lg:absolute top-0 left-0">
            <h1 className="text-center font-semibold text-xl lg:text-2xl absolute left-[50%] -translate-x-[50%]" draggable='true'>Chat Room</h1>
            <div className="h-full w-full flex items-end justify-between flex-col py-3">
                <div className="w-full h-full flex-col flex items-end justify-between p-5 overflow-y-scroll">
                    
                    <div className='relative w-fit h-fit flex flex-col items-end justify-end my-2'>
                        
                        {
                            response.length > 0 ? (
                                response.map(response => (
                                <div key={response._id} className='bg-black/50 rounded-lg rounded-br-none px-5 py-2 mx-2 flex flex-col items-end justify-between my-1'>
                                    <p className='font-semibold text-sm text-green-400'>{response.username}</p>
                                    <p className='text-lg'>{response.message}</p>
                                </div>
                            ))
                            ) : (
                                <div>
                                    <p>No Messages</p>
                                </div>
                            )
                        }
                        {/* <img src={camp} alt="man" className='w-[30px] h-[30px] object-cover rounded-full' /> */}
                    </div>

                </div>
                <div className="w-[90%] h-[10vh] bg-white/15 rounded-md overflow-hidden p-1 flex mx-auto">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Send a message' name="message" id="message" className="w-full h-full p-3 text-lg bg-transparent outline-none" />
                    {/* <input type="file" name="attactment" id="attachment" /> */}
                    <input type="submit" value="send" onClick={sendMessage} className="h-full px-4 text-lg font-semibold text-white bg-green-500 rounded-md uppercase cursor-pointer"/>
                </div>
                
            </div>
        </section>
     );
}
 
export default Messages;