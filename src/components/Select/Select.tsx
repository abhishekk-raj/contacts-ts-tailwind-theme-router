import type {ChangeEvent} from "react";

export interface SelectOptions {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOptions[];
  value?: string;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  onChange?: (value: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({options, value, disabled, name, placeholder, onChange}: SelectProps) => {
  return <select
    className="inputText"
    name={name}
    value={value}
    disabled={disabled}
    onChange={onChange}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map((option) => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ))}
  </select>
}

export default Select;
