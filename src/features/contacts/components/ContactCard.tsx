import {useNavigate, useParams} from "react-router-dom";

import useGetContact, {type GetContactProps} from "../hooks/useGetContact.tsx";
import Avatar from "../../../components/Avatar/Avatar.tsx";
import Button from "../../../components/Button/Button.tsx";

const ContactCard = () => {
  const {id} = useParams<{ id: string }>();
  const {contact, loading, error} = useGetContact({contactId: id} as GetContactProps);
  const navigate = useNavigate();

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
    <div className="flex justify-center items-center mt-10">
      <div className="card min-w-10 md:w-xl">
        <div className="flex justify-center items-center flex-col">
          <Avatar size={100} name={contact?.name ? contact.name : ''}/>
          <h1 className="text-2xl mt-2">{contact?.name}</h1>
        </div>
        <table className="flex flex-col justify-center items-center w-full mt-10">
          <tbody>
          <tr>
            <td className="w-1/3">Phone</td>
            <td className="text-dark dark:text-light">{contact?.phone}</td>
          </tr>
          <tr>
            <td className="w-1/3 py-5">Email</td>
            <td className="text-dark dark:text-light">{contact?.email}</td>
          </tr>
          <tr>
            <td className="w-1/3">Address</td>
            <td className="text-dark dark:text-light">{contact?.address}</td>
          </tr>
          </tbody>
        </table>

        <Button
          type="button"
          variant="outlined"
          className="mr-2 w-full mt-10 flex flex-row items-center justify-center"
          onClick={() => navigate(-1)}
        >
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
            </svg>
          </span>
          Back
        </Button>
      </div>
    </div>
  );
}

export default ContactCard;
