import {Navigate, useRoutes} from "react-router-dom";

import RouteNames from "../utils/route-names.ts";
import Login from "../pages/Login.tsx";
import Signup from "../pages/Signup.tsx";
import Contacts from "../pages/Contacts.tsx";
import ContactDetails from "../pages/ContactDetails.tsx";
import ProtectedRoute from "./ProtectedRoutes.tsx";
import EditContact from "../pages/EditContact.tsx";
import AddContact from "../pages/AddContact.tsx";
import Unauthorized from "../pages/Unauthorized.tsx";

const AppRoutes = () => {
  return useRoutes([
    {path: RouteNames.Home, element: <Navigate to={RouteNames.Contact.List} replace/>},
    {path: RouteNames.Auth.Login, element: <Login/>},
    {path: RouteNames.Auth.Signup, element: <Signup/>},
    {path: RouteNames.Unauthorized, element: <Unauthorized/>},
    {
      element: <ProtectedRoute/>,
      children: [
        {path: RouteNames.Contact.List, element: <Contacts/>},
        {path: RouteNames.Contact.Details, element: <ContactDetails/>},
      ]
    },
    {
      element: <ProtectedRoute allowedRoles={['admin']}/>,
      children: [
        {path: RouteNames.Contact.Edit, element: <EditContact/>},
        {path: RouteNames.Contact.Add, element: <AddContact/>}
      ]
    }
  ]);
}

export default AppRoutes;
