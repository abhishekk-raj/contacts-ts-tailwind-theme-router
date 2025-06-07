import type {ChangeEvent} from "react";

interface TextareaProps {
  placeholder?: string;
  name?: string;
  required?: boolean;
  value?: string;
  cols?: number;
  onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({placeholder, name, value, cols, onChange}: TextareaProps) => {
  return (
    <textarea
      className="inputText"
      cols={cols}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Textarea;