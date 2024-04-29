import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';
import Cookies from 'js-cookie';

const Contacts = () => {
    const [contact, setContacts] = useState([]);

  useEffect(() => {
    // Fetch emails from the backend when the component mounts
    axios.get('http://localhost:8080/api/contact')
      .then(response => {
        setContacts(response.data);
        // console.log(contact)
      })
      .catch(error => {
        console.error('Error fetching emails:', error);
      });
  }, [contact]);

  const handleDeleteMessage = (userId) => {
    // Make a DELETE request to delete the user
    fetch(`http://localhost:8080/api/deletecontact/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If deletion is successful, update the activeUsers state
          setContacts((prevUsers) => prevUsers.filter((user) => user._id !== userId));
          toast.success('Massage Deleted!');
        } else {
          // If deletion is not successful, handle the error
          console.error('Error deleting contact message:', response.statusText);
          toast.error('Error deleting message!');
        }
      })
      .catch((error) => {
        console.error('Error deleting message:', error)
        toast.error('Network Error!');
      });
  };

   //Saving delete event to database
   const ENDPOINT = 'http://localhost:8080';


   const [notice, setNotice] = useState('');
   const [username, setUsername] = useState('');
   const socket = io(ENDPOINT);
   
   useEffect(() => {
       const userId = Cookies.get('userID');
         
       axios.get(`http://localhost:8080/get-username?userId=${userId}`)
         .then(response => {
           setUsername(response.data.user.username);
           setNotice('Deleted a Contact Message.');
         })
           .catch(error => {
               console.error('Error fetching username', error);
           });
     }, []);
   
     useEffect(() => {
       socket.on('connect', () => {
           console.log('Socket Connected to server');
         });
         
         socket.on('connect_error', (error) => {
           console.log('Socket Connection error:', error);
         });
       // Emit the 'file deleted' event to the server after fetching username
       socket.on("file deleted", (data) => {
           console.log(data);
       })
       
     
       return () => {
       socket.disconnect();
       console.log('Socket disconnected')
       };
     }, [])
   
     const EventSave = () => {
       socket.emit("file deleted", { username, notice});
     }

    return ( <>
    <ToastContainer />
    <div className="w-full h-full text-primary p-5 block lg:absolute top-0 left-0">
        <h1 className="text-3xl text-center font-semibold uppercase">Contacts</h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-3 py-5">
          {contact.length > 0 ?
          (
              contact.map(cont => (
                <div className="p-3 text-primary border-2 border-primary w-full h-full" key={cont._id}>
                <h3 className="font-semibold text-xl">{cont.name}</h3>
                <p>{cont.phone}</p>
                <p>{cont.email}</p>
                <p className="p-2 bg-primary/5 text-justify rounded">{cont.message}</p>
                <div className="flex items-center justify-end text-lg font-semibold">
                    <a href={`mailto:${cont.email}`} target="_blank" rel='noreferrer' className="mx-2  uppercase">reply</a>
                    <button className="uppercase text-red-600" onClick={() => { handleDeleteMessage(cont._id); EventSave()} }>delete</button>
                </div>
            </div>
            ))
          ) : (
            <div className='h-full w-full flex items-center justify-center'>
              <h1 className='text-3xl text-primary text-center'>OOPS.. No data to show here!!</h1>
            </div>
          )}
            
        </div>
    </div>
    
    </> );
}
 
export default Contacts;