import type {ReactNode} from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  children?: ReactNode;
  disabled?: boolean;
}

const Button = ({type, children, disabled}: ButtonProps) => {
  return (
    <button className="button" type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
