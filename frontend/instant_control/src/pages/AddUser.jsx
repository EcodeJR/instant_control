import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     try {
    //       await axios.post('http://localhost:6000//api/users', { username, password });
    //       toast.success("User added!");
    //       // setShowPopup(true);
    //       setUsername('');
    //       setPassword('');
    //     } catch (error) {
    //       console.log("You shouldn't be here buddy! But since you are message me on twitter @EcodeJR let's connect. :)");
    //       console.log('Error adding user:', error.message);
    //       if (error.response.status == 400) {
    //         toast.error("User already exist")
    //       }else{
    //         toast.error("Network Error, Please try again.");
    //       }
          
    //       // alert('Subscription failed. Please try again.');
    //     }
    //     };

    const addUserToServer = async (username, password) => {
        try {
          await axios.post('http://localhost:8080/api/users', { username, password });
          return { success: true };
        } catch (error) {
          console.error('Error adding user:', error.message);
          return { success: false, error };
        }
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const result = await addUserToServer(username, password);
      
          if (result.success) {
            toast.success('User added!');
            setUsername('');
            setPassword('');
          } else {
            if (result.error.response && result.error.response.status === 400) {
              toast.error('User already exists');
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
    <div className="w-full p-3">
        <h1 className="text-center text-3xl font-bold uppercase">Users</h1>
        <div className="flex flex-col md:flex-row items-center justify-around w-full py-10">
            <form className="flex flex-col items-center justify-around w-[80%] md:w-[50%] h-[60vh] md:h-[70vh] bg-primary/10 rounded-lg shadow-xl">
                <h4 className="font-semibold text-3xl">Add user</h4>
                <div className="w-full h-[80%] flex items-center justify-center flex-col">
                    <div className="w-[80%]">
                    <label htmlFor="username" className="font-semibold text-base">Username:</label>
                    <input type="text" name="username" id="username" className="w-full bg-none border-primary/30 border-[2px] h-[7vh] hover:border-secondary outline-none p-2"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required />
                </div>
                <div className="w-[80%]">
                    <label htmlFor="password" className="font-semibold text-base">Password:</label>
                    <input type="password" name="password" id="password" className="w-full bg-none border-primary/30 border-[2px] h-[7vh] hover:border-secondary outline-none p-2"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required />
                </div>
                <button onClick={handleSubmit} className="bg-primary text-white text-lg font-semibold px-20 h-[7vh] my-5">Add</button>
                </div>
                
            </form>
            <div className="flex flex-col items-center justify-around p-5 text-white bg-primary w-[80%] md:w-[30%] rounded-lg">
                <h4 className="font-semibold text-3xl">Active users</h4>
                <ol className="my-7 list-decimal w-full">
                    <li className="flex items-center justify-around px-1 py-2 border-b-2 border-b-white">
                        <p className="text-lg">Ecodejr</p>
                        <button className="font-bold text-red-600">Del</button>
                    </li>
                    <li className="flex items-center justify-around px-1 py-2 border-b-2 border-b-white">
                        <p className="text-lg">Ecodejr</p>
                        <button className="font-bold text-red-600">Del</button>
                    </li>
                    <li className="flex items-center justify-around px-1 py-2 border-b-2 border-b-white">
                        <p className="text-lg">Ecodejr</p>
                        <button className="font-bold text-red-600">Del</button>
                    </li>
                </ol>
            </div>
        </div>
    </div>
    
    </> );
}
 
export default AddUser;