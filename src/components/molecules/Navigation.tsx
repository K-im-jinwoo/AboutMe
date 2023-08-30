import { FC } from "react";
import { Button, ButtonProps } from "../atoms";
import { makeClassName } from "../../utils/textUtil";

export interface NavigationItemProps extends ButtonProps {
    path: string;
}

const NavigationItem:FC<NavigationItemProps> = ({
    text,
    path,
    onClick,
    className: _className
}) => {
    const className = [_className].join(' ')
    return <Button className={makeClassName('font-bold'
    ,className)} text={text} onClick={onClick}></Button>
}

export interface NavigationProps {
    items: NavigationItemProps[];
    className?: string;
}

export const Navigation: FC<NavigationProps> = ({
    items,
    className,
}) => {
    return (
        <nav className={makeClassName('flex', className)}>
            {items.map((item)=> (
                <NavigationItem key={item.path} {...item}/>
            ))}
        </nav>
    )
}