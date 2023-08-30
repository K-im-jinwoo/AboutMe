import { FC, useState } from "react";
import { Button, Text, TextProps } from "../atoms";
import { makeClassName } from "../../utils/textUtil";

interface DropdownItemProps {
    items: TextProps[];
}

const DropdownItems:FC<DropdownItemProps> = ({items}) => {
    return (
        <ul className={makeClassName('flex flex-col text-2xl bold')}>
                {items.map((item,index) => {
                    return (
                        <li key={index}>
                            <Text text={item.text} {...items}></Text>
                        </li>
                    )
                })}
        </ul>
    )
}
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
