import type {ReactNode} from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  children?: ReactNode;
  disabled?: boolean;
  variant?: 'outlined' | 'filled';
  onClick?: () => void;
  className?: string;
}

const Button = ({
                  type,
                  children,
                  disabled,
                  variant = 'filled',
                  onClick,
                  className,
                }: ButtonProps) => {
  return (
    <button
      className={`button ${variant === 'filled' ? 'button-filled' : 'button-outlined'} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
