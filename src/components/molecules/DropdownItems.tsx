import { FC } from "react"
import { Text,TextProps } from "../atoms"
import { makeClassName } from "../../utils/textUtil";

interface DropdownItemProps {
    items: TextProps[];
}

export const DropdownItems:FC<DropdownItemProps> = ({items}) => {
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