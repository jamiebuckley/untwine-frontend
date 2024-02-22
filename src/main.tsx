import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from "./layout.tsx";
import PipelinesList from "./pages/pipelines/pipelinesList.tsx";
import DataSourcesList from "./pages/data/dataSourcesList.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                loader: ({request}) => {
                    return fetch("/api/pipelines", {
                        signal: request.signal
                    });
                },
                element: <PipelinesList />,
            },
            {
                path: "/datasources",
                element: <DataSourcesList />
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
