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
  } from 'react-router-dom';
  //Layout
import RootLayout from './pages/RootLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
// import { useState } from 'react';

// import GallaryPage from './pages/GallaryPage';
// import Policies from './pages/policies';
// import Terms from './pages/Terms&Conditions';
{

  /** import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/

}


// const [authenticated, setAuthenticated] = useState(false);

//   const handleLogin = () => {
//     // Your login logic here
//     // For simplicity, let's assume successful login for any non-empty input
//     setAuthenticated(true);
//   };


const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='newslatters' element={<Newslatters />} />
          <Route path='booking' element={<Booking />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="settings" element={<Settings />} />
          <Route path='*' element={<NotFound />} />
        </Route>
  )
)

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App;