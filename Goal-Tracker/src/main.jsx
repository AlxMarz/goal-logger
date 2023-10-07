import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'


//imported from class repo  
import App from './App';
import Error from './pages/Error';
import GoalTracker from './pages/GoalTracker';
import Contact from './pages/Contact';
import Calender from './pages/Calender';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <GoalTracker />,
      },
      {
        path: '/GoalTracker',
        element: <GoalTracker />,
      },
      {
        path: '/Calender',
        element: <Calender />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
