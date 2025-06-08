import {useContacts} from "../hooks/useContacts.tsx";
import Avatar from "../../../components/Avatar/Avatar.tsx";
import {generatePath, Link} from "react-router-dom";
import RouteNames from "../../../utils/route-names.ts";

const ContactList = () => {
  const {contacts, loading, error} = useContacts();

  if (error) {
    return <div className="flex justify-center items-center text-red-600 dark:text-red-400 text-xl mt-10">
      {error.toString() || "Something went wrong"}
    </div>;
  }

  if (loading) {
    return <div className="flex justify-center items-center text-slate-600 dark:text-slate-100 text-xl mt-10">
      Loading...
    </div>;
  }

  return (
    <div className="flex w-full flex-col mt-5">
      {
        contacts.map((contact) => (
          <div
            key={contact.id}
            className="card mt-5 flex flex-row items-center"
          >
            <div>
              <Avatar name={contact.name} size={50}/>
            </div>
            <div className="ml-5">
              <h2 className="text-xl">{contact.name}</h2>
              <p className="text-sm text-secondary-light dark:text-secondary-light">{contact.phone}</p>
            </div>
            <Link to={generatePath(RouteNames.Contact.Details, {id: contact.id})} className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
              </svg>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default ContactList;