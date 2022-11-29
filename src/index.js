import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Home from './pages/home/home';
import Questions from './components/QuestionComponent/Questions';
import Notifications from './components/Notification/Notifications/Notifications';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>component not yet created, please create it🤷‍♂️😎!!!</h1>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "questions",
        element: <Questions />
      },
      {
        path: "notifications",
        element: <Notifications/>
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={Router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
