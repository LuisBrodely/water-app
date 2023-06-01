import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';

import { LoadingPage } from './pages/LoadingPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingPage />,
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "*",
    element: <Navigate to="/" />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
