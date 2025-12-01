import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Models from './Models';
import About from './About';
import Drawings from './Drawings';
import Item from './Item';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import "./fonts/BOMBARD_.ttf";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/drawings",
    element: <Drawings/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/models",
    element: <Models/>
  },
  {
    path: "/item",
    element: <Item/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
