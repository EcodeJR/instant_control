import { useState, useEffect } from 'react';
import axios from 'axios';

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

    return ( <>
    <div className="w-full h-full text-primary p-5 block lg:absolute top-0 left-0">
        <h1 className="text-3xl text-center font-semibold uppercase">Contacts</h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-3 py-5">
            {contact.map(cont => (
                <div className="p-3 text-primary border-2 border-primary w-full h-full" key={cont._id}>
                <h3 className="font-semibold text-xl">{cont.name}</h3>
                <p>{cont.phone}</p>
                <p>{cont.email}</p>
                <p className="p-2 bg-primary/5 text-justify rounded">{cont.message}</p>
                <div className="flex items-center justify-end text-lg font-semibold">
                    <button className="mx-2  uppercase">reply</button>
                    <button className="uppercase text-red-600">delete</button>
                </div>
            </div>
            ))}
            
        </div>
    </div>
    
    </> );
}
 
export default Contacts;