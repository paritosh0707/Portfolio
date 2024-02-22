import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Med_chatbot from './Projects/Med_chatbot/Med_chatbot';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/" ,
    element: <App />,
  },
  {
    path: "Med_chatbot" ,
    element: <Med_chatbot />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
    
);

reportWebVitals();
