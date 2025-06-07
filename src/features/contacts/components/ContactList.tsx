import {useContacts} from "../hooks/useContacts.tsx";

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
    <div className="flex justify-center items-center w-full">
      <h1>Contact List</h1>
      {
        contacts.map((contact) => (
          <div key={contact.id}>
            {contact.name}
          </div>
        ))
      }
    </div>
  )
}

export default ContactList;