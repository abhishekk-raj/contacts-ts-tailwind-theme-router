import {useState} from "react";
import type {Contact} from "../types/Contact.type.ts";
import {createContact} from "../services/Contact.service.ts";

export const useCreateContact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Contact[] | null>(null);

  const create = async (contact: Contact) => {
    setLoading(true);
    setError("");

    try {
      const response = await createContact(contact);
      setData(response.data);
    } catch (error: unknown) {
      // @ts-ignore
      const message = error instanceof Error ? error.message : String(error?.message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {create, data, loading, error};
};
