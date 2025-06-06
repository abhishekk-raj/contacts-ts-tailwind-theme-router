import type {ChangeEvent} from "react";

interface InputProps {
  type?: "text" | "password" | "email" | "tel";
  placeholder?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({type, placeholder, name, required, value, onChange}: InputProps) => {
  return (
    <input
      className="inputText"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}

export default Input;