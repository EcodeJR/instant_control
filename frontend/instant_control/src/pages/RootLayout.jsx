import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
import Loading from '../components/Loading';
import { useState } from 'react'
import Footer from "../components/Footer";
import {useNavigate} from 'react-router-dom'

import  { createContext, useContext } from 'react';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const RootLayout = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Create a context for the auth status and functions


  const [token, setToken] = useState('');

  const handleLogout = () => {
    setToken('');
    navigate('/', { replace: true });
  };

    const handleLoad = () => {
      // Once everything on the page has loaded
      setLoading(true);
    };

    window.onload= handleLoad;

    return ( <>
    <AuthContext.Provider value={{ token, handleLogout }}>
        {loading ? (<Loading />) :
      (
        <section className="w-screen h-full scroll-smooth flex flex-col lg:flex-row">
          <div className="flex-shrink-0 w-full lg:w-[20vw] h-[5vh] lg:h-screen overflow-hidden">
              <SideBar onLogout={handleLogout} />
          </div>
          <div className="lg:flex-1 flex flex-col overflow-hidden flex-grow">
              <div className="lg:flex-1 relative overflow-y-scroll overflow-hidden h-full">
                <Outlet />
              </div>
              <Footer />
          </div>
        </section>

      )
    }
    </AuthContext.Provider>
    </> );
}
 
export default RootLayout;