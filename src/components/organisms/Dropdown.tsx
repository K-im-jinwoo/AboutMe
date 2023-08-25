import { FC, useState } from "react";
import { DropdownItems } from "../molecules";
import { Button, TextProps } from "../atoms";

interface DropdownProps {
  items: TextProps[];
}



export const Dropdown: FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button text="Menu" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <DropdownItems items={items} /> }
    </>
  );
};
