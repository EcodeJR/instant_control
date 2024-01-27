import { useState, useEffect } from 'react';
import axios from 'axios';

const Newslatters = () => {

    const [emails, setEmails] = useState([]);

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


    return ( <>
    <div className="w-full h-full text-primary p-5 block lg:absolute top-0 left-0">
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
        {emails.map(email => (
          <tr key={email._id} className='p-3'>
            <td className='p-2 border-2 text-lg font-semibold box-border block md:table-cell'>{email.email}</td>
            {/* <td className='p-2 border-2'><button className='px-3 py-2 rounded-sm text-white bg-primary font-semibold uppercase'>Edit</button></td> */}
            <td className='p-2 border-2 box-border block md:table-cell'><button className='px-3 py-2 rounded-sm text-white bg-green-600 font-semibold uppercase'>Mail</button></td>
            <td className='p-2 border-2 box-border block md:table-cell'><button className='px-3 py-2 rounded-sm text-white bg-red-600 font-semibold uppercase'>Delete</button></td>
          </tr>
        ))}
        </tbody>
    </table>
        
            
            {/* <ol className="w-[90%] text-xl px-5 list-decimal mx-auto">
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                <li className="flex items-center justify-between bg-primary/5 p-3 my-2 rounded"><b className="lg:tracking-wider">emmanueldcode@gmail.com</b><span><button>edit</button><button className="mx-3">mail</button><button>delete</button></span></li>
                
            </ol> */}
        </div>
    </div>
    
    </> );
}
 
export default Newslatters;