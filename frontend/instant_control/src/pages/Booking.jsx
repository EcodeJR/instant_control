import { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
    const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch emails from the backend when the component mounts
    axios.get('http://localhost:8080/api/tickets')
      .then(response => {
        setTickets(response.data);
        // console.log(contact)
      })
      .catch(error => {
        console.error('Error fetching emails:', error);
      });
  }, [tickets]);

    return ( <>
    <div className="w-full h-full text-primary p-5 block lg:absolute top-0 left-0">
        <h1 className="text-3xl text-center font-semibold uppercase">Booking</h1>
        <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 place-items-center">

            {tickets.map(ticket => (
                <div className="flex items-center justify-around p-5 bg-primary rounded-lg hover:shadow-xl hover:-translate-y-2 hover:duration-100 w-full h-full" key={ticket._id}>
                <div className="text-white text-lg">
                    <h3>Name: {ticket.name}</h3>
                    <p>Phone: {ticket.phone}</p>
                    <p>Email: {ticket.email}</p>
                    <p>Type: {ticket.location}</p>
                </div>
                <div className="text-base ml-5 text-white">
                    <p>Date/Time: <b className="text-secondary text-lg"> {ticket.date}</b></p>
                    <p>Total: <b className="text-secondary text-lg"> $20</b></p>
                    <label htmlFor="booked">Booked</label>
                    <input type="checkbox" name="booked" id="booked" className="h-5 w-5 ml-2 cursor-pointer" />
                </div>
            </div>
            ))}
            

            
        </div>
    </div>
    </> );
}
 
export default Booking;