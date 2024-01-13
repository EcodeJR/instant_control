import Dashboard from './pages/Dashboard';
//pages
import Contacts from './pages/Contacts';
import Newslatters from './pages/Newslatters';


import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom';
  //Layout
import RootLayout from './pages/RootLayout';
import NotFound from './pages/NotFound';
// import GallaryPage from './pages/GallaryPage';
// import Policies from './pages/policies';
// import Terms from './pages/Terms&Conditions';
{

  /** import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/

}

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='newslatters' element={<Newslatters />} />
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