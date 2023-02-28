import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import './main.scss'
import 'semantic-ui-css/semantic.min.css'
import Mainpage from './pages/Mainpage'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Room from './pages/Room'
import Detail from './pages/Detail'
import Allroom from './pages/Allroom'
import About from './pages/About'
import Activity from './pages/Activity';

//Admin
import Mainpage1 from './Admin/Mainpage';
import Hotel1 from './Admin/Hotel';
import User1 from './Admin/User';
import Room1 from './Admin/Room';
import Home1 from './Admin/Home';
import CreateUser1 from './Admin/CreateUser';
import CreateRoom1 from './Admin/CreateRoom';
import DetailUser1 from './Admin/DetailUser';
import DetailRoom1 from './Admin/DetailRoom';
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Login1 from './Admin/Login';
import UpdateRoom from './Admin/UpdateRoom';
import UpdateUser from './Admin/UpdateUser';

//
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/admin/adminlogin" />;
  }

  return children;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "login",
        element: <Login />
      },
      {
        path: "activity",
        element: <Activity />
      },

      {
        path: "register",
        element: <Register />
      },
      {
        path: "rooms",
        element: <Room />
      },
      {
        path: "detail/:id",
        element: <Detail />
      },
      {
        path: "room",
        element: <Allroom />
      },





    ]
  },
  {
    path: "/admin/adminlogin",
    element: <Login1 />
  },
  {
    path: "admin",
    element: <ProtectedRoute><Mainpage1 /></ProtectedRoute>,
    children: [
      {
        path: "admin",
        element: <Home1 />
      },
      {
        path: "user1",
        element: <User1 />
      },
      {
        path: "room1",
        element: <Room1 />
      },
      {
        path: "hotel1",
        element: <Hotel1 />
      },

      {
        path: "createuser1",
        element: <CreateUser1 />
      },
      {
        path: "createroom1",
        element: <CreateRoom1 />
      },
      {
        path: "user1/detailuser/:id",
        element: <DetailUser1 />
      },
      {
        path: "room1/updateroom/:id",
        element: <UpdateRoom />
      },
      {
        path: "user1/updateuser/:id",
        element: <UpdateUser />
      },

      {
        path: "room1/detailroom/:id",
        element: <DetailRoom1 />
      },


    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <SearchContextProvider>
      <RouterProvider router={router} />
    </SearchContextProvider>
  </AuthContextProvider>
);

