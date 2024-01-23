
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts/AllProducts';
import AllSales from './pages/AllSales/AllSales';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import MainPage from './pages/MainPage/MainPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import './styles/Reset.module.css';
import './styles/Common.module.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
       {
         path: '/',
         element: <MainPage />,
       },
       {
         path: '/categories',
         element: <CategoryPage />,
       },
       {
         path: '/products',
         element: <AllProducts />,
       },
      {
         path: '/sales',
         element: <AllSales />,
       },
       {
        path: '*',
        element: <ErrorPage />,
      },
     ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);