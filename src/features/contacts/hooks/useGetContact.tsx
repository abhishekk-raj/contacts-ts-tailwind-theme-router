import type {Contact} from "../types/Contact.type.ts";
import {useEffect, useState} from "react";
import {getContact} from "../services/Contact.service.ts";

export interface GetContactProps {
  contactId: string;
}

const useGetContact = ({contactId}: GetContactProps) => {
  const [contact, setContact] = useState<Contact>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await getContact(contactId);
        setContact(response.data);
      } catch (error: unknown) {
        // @ts-ignore
        const message = error instanceof Error ? error.message : String(error?.message);
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    void fetchContact();
  }, [contactId]);

  return { loading, error, contact };
}

export default useGetContact;
