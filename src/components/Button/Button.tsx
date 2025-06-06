import type {ReactNode} from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  children?: ReactNode;
}

const Button = ({type, children}: ButtonProps) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
}

export default Button;
