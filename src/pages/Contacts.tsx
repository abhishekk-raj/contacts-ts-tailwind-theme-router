import ContactList from "../features/contacts/components/ContactList.tsx";
import RouteNames from "../utils/route-names.ts";
import {Link} from "react-router-dom";

const Contacts = () => {
  return (
    <div className="flex flex-col w-full">
      <Link to={RouteNames.Contact.Add} className="self-end button">Add Contact</Link>
      <ContactList/>
    </div>
  )
}

export default Contacts;
