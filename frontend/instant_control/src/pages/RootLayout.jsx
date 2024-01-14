import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
import Loading from '../components/Loading';
import { useState } from 'react'
import Footer from "../components/Footer";

const RootLayout = () => {
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //   const asyncOperation = setTimeout(() => {
    //     setLoading(false);
    //   }, 2000);
    //   return () => clearTimeout(asyncOperation);
    // }, []);
    const handleLoad = () => {
      // Once everything on the page has loaded
      setLoading(true);
    };

    window.onload= handleLoad;

    return ( <>
        {loading ? (<Loading />) :
      (
        <section className="w-screen h-full scroll-smooth flex">
            <div className="flex-shrink-0 w-[20vw] h-screen overflow-hidden">
                <SideBar />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-hidden">
                    <Outlet />
                </div>
                
                <Footer />
            </div>
            
        </section>
      )
    }
    </> );
}
 
export default RootLayout;