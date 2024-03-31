import { useState } from 'react';
import Logimage from '../assets/camp.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const Login = ({ onLogin }) => {
    // const [loggedIn, isLoggedin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const checkingUser = async (username, password) => {
      try {
        const response = await axios.post('http://localhost:8080/api/login', { username, password });
        const token = response.data.newToken;
        console.log(response.data.userID)
        Cookies.set('userID', response.data.userID, { expires: 3 });
        localStorage.setItem('userID', response.data.userID);
        onLogin(token);
        return { success: true, token };
      } catch (error) {
        console.error('Login failed', error.response ? error.response.data : error.message);
        return { success: false, status: error.response ? error.response.data : error.message };
      }
      };

      const handleSubmit = async (e) => {
        
        if (!username || !password) {
            e.preventDefault();
            toast.error('Enter your credentials')
        }else{
            e.preventDefault();
            try {
          const result = await checkingUser(username, password);
      
          if (result.success) {
            toast.success('Logging in!');
            setUsername('');
            setPassword('');
            onLogin(result.token);
            navigate('/dashboard', { replace: true });
          } else {
            // if (result.error.response && result.error.response.status === 400) {
            //   toast.error('Invalid credentials!!');
            // } else {
            //   toast.error('Invalid credentials!!!');
            // }
            toast.error(result.status)
          }
        } catch (error) {
          console.error('Unexpected error:', error);
          toast.error('Unexpected error. Please try again.');
        }
        }
      
      };
   
    return ( <>
    
    <section className="w-screen h-screen fixed top-0 left-0 bg-white flex flex-col-reverse lg:flex-row items-center justify-center text-primary z-50">
        <ToastContainer />
        <div className='w-full lg:w-[50vw] h-[60vh] lg:h-full flex flex-col items-center justify-center'>
            <h2 className='text-5xl md:text-6xl font-bold'>INSTANT</h2>
            <h4 className='text-lg text-primary/50 italic text-center'>Controls to INSTANT a cutting-edge landing page</h4>
            <form className='flex items-center justify-center flex-col my-5 w-full'>
                <h2 className='text-4xl font-bold'>LOGIN</h2>
                <input type="text" name="username" id="username" placeholder='USERNAME' className='w-[80%] lg:w-[70%] p-3 text-lg border-2 border-primary my-1' 
                value={username}
                onChange={e => setUsername(e.target.value)}
                required/>
                <input type="password" name="password" id="password" placeholder='PASSWORD' className='w-[80%] lg:w-[70%] p-3 text-lg border-2 border-primary my-1' 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required/>
                <button onClick={handleSubmit} className='px-7 py-3 bg-primary text-white font-semibold hover:px-9 duration-200 my-2'>Log in</button>
            </form>
        </div>
        <div className='w-full lg:w-[50vw] h-[40vh] lg:h-full relative'>
            <img src={Logimage} alt="bg image" className='h-full w-full object-cover' />
            <div className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-black/20 backdrop-blur-sm p-4 flex items-center justify-center w-[90%] rounded-md'>
                <p className='text-lg font-semibold text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
            </div>
        </div>
    </section>
    </> );
}
 
Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
  };
export default Login;