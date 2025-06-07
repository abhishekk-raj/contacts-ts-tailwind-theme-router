import {useEffect, useState} from "react";

import {getContacts} from '../services/Contact.service.ts';
import type {Contact} from "../types/Contact.type.ts";

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getContacts();
        setContacts(response.data);
      } catch (error: unknown) {
        // @ts-ignore
        const message = error instanceof Error ? error.message : String(error?.message);
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    void fetchContacts();
  }, [])

  return {contacts, loading, error};
}
