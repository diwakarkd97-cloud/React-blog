import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './components/Template';
import All from './components/All';
import Ai from './components/Ai';
import CyberSecurity from './components/CyberSecurity';
import DataScience from './components/DataScience';
import FullStack from './components/FullStack';
import Error from './components/Error';
import Blog from './components/Blog';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        { path: "/", element: <All /> },
        { path: "/fullstack", element: <FullStack /> },
        { path: "/cybersecurity", element: <CyberSecurity /> },
        { path: "/datascience", element: <DataScience /> },
        { path: "/ai", element: <Ai /> },
        { path: "/*", element: <Error /> }
      ]
    },
    {
      path: "/blog/:id",
      element: <Blog />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;