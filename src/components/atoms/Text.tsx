import { FC } from "react"

export interface TextProps {
    className?: string;
    text: string;
    color?: string;
}

export const Text:FC<TextProps> = ({className:_className,text,color}) => {

    const className = ['nes-text' ,_className, color].join(' ')

    return <span className={className}>{text}</span>
}