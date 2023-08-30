import { FC } from "react"

interface ProgressProps {
    className?: string;
    color?: string;
    value: string;
    max: string;
}

export const Progress:FC<ProgressProps> = ({className: _className, color, value, max}) => {
    const className = ['nes-progress', _className, color].join(' ');
    return <progress className={className} value={value} max={max}></progress>
}