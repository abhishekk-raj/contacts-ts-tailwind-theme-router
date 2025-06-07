import type {ApiResponse} from "../../../types/api-response.type.ts";
import type {Contact} from "../types/Contact.type.ts";

export const getContacts = (): Promise<ApiResponse<Contact[]>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const contacts: Contact[] = JSON.parse(localStorage.getItem("contacts") || "[]");

      if (!contacts || !contacts.length) {
        return reject({
          status: 404,
          message: "No contacts found",
          data: []
        });
      }

      resolve({
        status: 200,
        message: "Found contacts",
        data: contacts
      });
    }, 2000);
  });
}

export const createContact = async (req: Contact): Promise<ApiResponse<Contact[]>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const contacts: Contact[] = JSON.parse(localStorage.getItem("contacts") || "[]");
      const oldContactsCount = contacts.length;
      contacts.push(req);
      localStorage.setItem('contacts', JSON.stringify(contacts));

      if (contacts.length === oldContactsCount) {
        return reject({
          status: 404,
          message: "Contact update failed!",
          data: []
        });
      }

      resolve({
        status: 200,
        message: "Contacts updated!",
        data: contacts
      });
    }, 2000);
  })
}
