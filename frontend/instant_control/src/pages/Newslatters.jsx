import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newslatters = () => {

    const [emails, setEmails] = useState([]);
    const  [subject, setSubject] = useState('');
    const [text, setText] = useState('')

  useEffect(() => {
    // Fetch emails from the backend when the component mounts
    axios.get('http://localhost:8080/api/emails')
      .then(response => {
        setEmails(response.data);
      })
      .catch(error => {
        console.error('Error fetching emails:', error);
      });
  }, []);

  const handleDeleteEmail = (userId) => {
    // Make a DELETE request to delete the user
    fetch(`http://localhost:8080/api/deletemail/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If deletion is successful, update the activeUsers state
          setEmails((prevUsers) => prevUsers.filter((user) => user._id !== userId));
          toast.success('Email Deleted!');
        } else {
          // If deletion is not successful, handle the error
          console.error('Error deleting user:', response.statusText);
          toast.error('Error deleting email!');
        }
      })
      .catch((error) => {
        console.error('Error deleting user:', error)
        toast.error('Network Error!');
      });
  };

  const SendingNews = async (subject, text) => {
    try {
      await axios.post('http://localhost:8080/send-newsletter', { subject, text });
      return { success: true };
    } catch (error) {
      console.error('Error adding user:', error.message);
      return { success: false, error };
    }
  };
  
  const handleSend = async (e) => {
    e.preventDefault();
  
    try {
      const result = await SendingNews(subject, text);
  
      if (result.success) {
        toast.success('Email sent!');
        setText('');
        setSubject('');
      } else {
        if (result.error.response && result.error.response.status === 400) {
          toast.error('Email Not sent');
        } else {
          toast.error('Network error. Please try again.');
        }
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Unexpected error. Please try again.');
    }
  };

    return ( <>
    <ToastContainer />
    <div className="w-full h-full text-primary p-5 block lg:absolute top-0 left-0">
      <form className='w-[90%] md:w-[70%] h-fit flex items-center justify-center flex-col mx-auto mb-3 bg-primary p-5 rounded-md shadow-lg'>
        <h3 className='text-white text-2xl font-semibold my-3 uppercase'>Send Newslatters</h3>
        <label htmlFor="subject" className='text-sm text-gray-200 font-semibold uppercase'>Mail Subject</label>
        <input type="text" name="subject"  className='w-[80%] border-2 border-white p-3 text-lg outline-none'
        value={subject}
        onChange={e => setSubject(e.target.value)}
        required/>
        <label htmlFor="text" className='text-sm text-gray-200 font-semibold uppercase'>Mail Body</label>
        <textarea name="text" cols="20" rows="10" className='w-[80%] h-[30vh] border-2 border-white p-3 text-lg outline-none'
        value={text}
        onChange={e => setText(e.target.value)}
        required></textarea>
        <button className='text-base px-5 py-3 bg-white my-3 uppercase text-primary font-bold' onClick={handleSend}>Send Email</button>
      </form>
        <h1 className="text-3xl text-center font-semibold uppercase">Newslatters</h1>
        <div className="w-full h-fit my-3">
        <table className='w-full p-5'>
        <thead>
            <tr className='text-left p-3'>
                <th className='p-2 border-2 border-gray-300 bg-gray-200 uppercase box-border block md:table-cell'>Emails</th>
                {/* <th className='p-2 border-2 bg-gray-200 uppercase'>Edit</th> */}
                <th className='p-2 border-2 border-gray-300 bg-gray-200 uppercase box-border block md:table-cell'>Mail</th>
                <th className='p-2 border-2 border-gray-300 bg-gray-200 uppercase box-border block md:table-cell'>Delete</th>
            </tr>
        </thead>
        <tbody>
        {emails.length > 0 ? (
  // If there are emails, render a table row for each email
          emails.map(email => (
            <tr key={email._id} className='p-3'>
              <td className='p-2 border-2 text-lg font-semibold box-border block md:table-cell'>{email.email}</td>
              <td className='p-2 border-2 box-border block md:table-cell'>
                <a href={`mailto:${email.email}`} target="_blank" rel='noreferrer' className='px-3 py-2 rounded-sm text-white bg-green-600 font-semibold uppercase'>
                  Mail
                </a>
              </td>
              <td className='p-2 border-2 box-border block md:table-cell'>
                <button className='px-3 py-2 rounded-sm text-white bg-red-600 font-semibold uppercase' onClick={() => handleDeleteEmail(email._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          // If there are no emails, render a message
          <div className='h-full w-full flex items-center justify-center p-10'>
            <h1 className='text-3xl text-primary text-center'>OOPS.. No data to show here!!</h1>
          </div>
        )}

        
        </tbody>
    </table>
        
            
        </div>
    </div>
    
    </> );
}
 
export default Newslatters;