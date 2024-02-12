import Dashboard from './pages/Dashboard';
//pages
import Contacts from './pages/Contacts';
import Newslatters from './pages/Newslatters';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import AddUser from './pages/AddUser';
import Settings from './pages/Settings';

import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  } from 'react-router-dom';
  //Layout
import RootLayout from './pages/RootLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';


function App() {

const handleLogin = (token) => {
    setToken(token);
  // Set a cookie for the token with an expiration of 3 days
  Cookies.set('token', token, { expires: 3 });
  };

  const handleLogout = () => {
    setToken('');
    // Remove the cookie for the token
    Cookies.remove('token');
    console.log('logged out')
  };

  const tokenCookie = Cookies.get('token');
  const [token, setToken] = useState(tokenCookie || '');
  
  
  // const location = useLocation();
  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Login onLogin={handleLogin} />} />

            <Route path='dashboard' element={token ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/"/>} />
            <Route path='contacts' element={token ? <Contacts /> : <Navigate to="/"/>} />
            <Route path='newslatters' element={token ? <Newslatters /> : <Navigate to="/"/>} />
            <Route path='booking' element={token ? <Booking /> : <Navigate to="/"/>} />
            <Route path="gallery" element={token ? <Gallery /> : <Navigate to="/"/>} />

            
            <Route path="adduser" element={token ? <AddUser /> : <Navigate to="/"/>} />
            <Route path="settings" element={token ? <Settings /> : <Navigate to="/"/>} />


            <Route path="messages" element={token ? <Messages /> : <Navigate to="/"/>} />
            <Route path="notifications" element={token ? <Notifications /> : <Navigate to="/"/>} />

            <Route path='*' element={<NotFound />} />
          </Route>
    )
  )
  
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App;