import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import ToDoList from './pages/ToDoList';
import CreateList from './pages/CreateList';

const container = document.getElementById('App')
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <ToDoList />,
  },
  {
    path: '/create',
    element: <CreateList />
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);