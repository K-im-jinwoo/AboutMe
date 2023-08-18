import { FC, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ReactButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export interface ButtonProps extends ReactButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  className: _className,
  ...props
}) => {
  const className = ["nes-btn", _className].join(" ");
  return (
    <button onClick={onClick} className={className} {...props}>
      {text}
    </button>
  );
};
