import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/Home.jsx';
import NewSurvey from './components/pages/NewSurvey.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"/create-new-survey",
    element: <NewSurvey/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
