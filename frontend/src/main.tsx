import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './pages/Projects.tsx';
import Tasks from './pages/Tasks.tsx';
import Login from './pages/Login.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        element: <ProtectedRoute />,
        errorElement: <p>There was an error.</p>,
        children: [
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "tasks",
            element: <Tasks />,
          },
          {
            path: "*",
            element: <p>Not Found</p>
          }
        ]
      },

    ],
  },
], {
  basename: import.meta.env.VITE_BASE_PATH
});

if (import.meta.env.DEV) {
  fetch('/api/method/scope.www.scope.get_context_for_dev', {
    method: 'POST',
  })
    .then(response => response.json())
    .then((values) => {
      const v = JSON.parse(values.message)
      //@ts-expect-error Adding Frappe to Window
      if (!window.frappe) window.frappe = {};
      //@ts-expect-error Adding Frappe to Window
      window.frappe.boot = v
    }
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
