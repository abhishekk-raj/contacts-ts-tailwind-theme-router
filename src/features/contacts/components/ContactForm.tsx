import Input from "../../../components/Input/Input.tsx";
import Textarea from "../../../components/Input/Textarea.tsx";
import Button from "../../../components/Button/Button.tsx";
import {type FormEvent, useState} from "react";
import Select, {type SelectOptions} from "../../../components/Select/Select.tsx";
import type {Contact} from "../types/Contact.type.ts";
import {useCreateContact} from "../hooks/useCreateContact.tsx";
import {useNavigate} from "react-router-dom";
import RouteNames from "../../../utils/route-names.ts";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);

  const navigate = useNavigate();
  const {create, data, loading, error} = useCreateContact();

  const options: SelectOptions[] = [
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'}
  ];

  const onContactFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contactReq: Contact = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      address,
      isFavourite
    }
    try {
      await create(contactReq);
      navigate(RouteNames.Contact.List);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center h-full justify-center items-center">
      <div className="card">
        <h2 className="text-center mb-4 text-2xl">Add Contact</h2>
        <form className="form min-w-10 md:w-md" onSubmit={onContactFormSubmit}>
          <Input type='text' placeholder='Name' required={true} value={name}
                 onChange={(e) => setName(e.target.value)}/>
          <Input type="email" placeholder="Email" name="email" required={true} value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
          <Input type="tel" placeholder="Phone" name="phone" required={true} value={phone}
                 onChange={(e) => setPhone(e.target.value)}/>
          <Textarea placeholder="Address" name="address" required={true} cols={4} value={address}
                    onChange={(e) => setAddress(e.target.value)}/>
          <Select options={options} placeholder="Favourite contact?" value={isFavourite ? 'yes' : 'no'}
                  onChange={(e) => setIsFavourite(e.target.value === 'yes')}/>
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Add Contact"}
          </Button>
          {error && <p className="text-red-500">{error}</p>}
          {data && <p className="text-green-500">Contact Created Successfully!</p>}
        </form>
      </div>
    </div>
  )
}

export default ContactForm;