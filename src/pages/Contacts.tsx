import ContactList from "../features/contacts/components/ContactList.tsx";
import RouteNames from "../utils/route-names.ts";
import {Link} from "react-router-dom";

const Contacts = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl">Contact List</h1>
        <Link to={RouteNames.Contact.Add} className="self-end button button-filled">Add Contact</Link>
      </div>
      <ContactList/>
    </div>
  )
}

export default Contacts;
