import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import Error from './pages/Error.jsx';
import ReactChallenge1 from './pages/reactChallenges/challenge1.jsx';
import ReactChallenge2 from './pages/reactChallenges/challenge2.jsx';
import ReactChallenge3 from './pages/reactChallenges/challenge3.jsx';
import ReactChallenge4 from './pages/reactChallenges/challenge4.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element: <Homepage />
      }, 
      {
        path: '/reactchallenge1',
        element: <ReactChallenge1/>
      },
      {
        path: '/reactchallenge2',
        element: <ReactChallenge2/>
      },
      {
        path: '/reactchallenge3',
        element: <ReactChallenge3/>
      },
      {
        path: '/reactchallenge4',
        element: <ReactChallenge4/>
      },
      {
        path: 'error',
        element: <Error />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
