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
        <section className="w-screen h-full scroll-smooth flex flex-col lg:flex-row">
          <div className="flex-shrink-0 w-full lg:w-[20vw] h-[5vh] lg:h-screen overflow-hidden">
              <SideBar />
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
    </> );
}
 
export default RootLayout;