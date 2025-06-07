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
