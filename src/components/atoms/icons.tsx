import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ReactIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

interface IconProps extends ReactIconProps {
    name : string;
    size : string;
    className? : string;
}

interface BcrikkoProps extends ReactIconProps{
    className? : string;
}

export const Icon :FC<IconProps> = (
    {className: _className, name, size, ...props}
    ) => {
        const className = ["nes-icon", _className, name, size].join(' ')

    return <i className={className} {...props}></i>
}

export const Bcrikko :FC<BcrikkoProps> = ({
    className:_className,
    ...props
}) => {
    const className = ["nes-bcrikko", _className].join(' ')

    return <i className={className} {...props}></i>
}