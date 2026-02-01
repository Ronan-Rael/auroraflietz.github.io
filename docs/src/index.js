import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Models from './Models';
import About from './About';
import Drawings from './Drawings';
import Item from './Item';
import ItemMod from './ItemMod';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import "./fonts/BOMBARD_.ttf";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/auroraflietz.github.io",
    element: <Home />
  },
  {
    path: "/auroraflietz.github.io/drawings",
    element: <Drawings/>
  },
  {
    path: "/auroraflietz.github.io/about",
    element: <About/>
  },
  {
    path: "/auroraflietz.github.io/models",
    element: <Models/>
  },
  {
    path: "/auroraflietz.github.io/item",
    element: <Item/>
  },
  {
    path: "/auroraflietz.github.io/itemMod",
    element: <ItemMod/>
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
