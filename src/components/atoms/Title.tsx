import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { makeClassName } from "../../utils/textUtil";

interface TextProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
    textAlign? : string;
    text: string;
}

export const Title: FC<TextProps> = ({
    className: _className,
    text,
    textAlign = "text-center",
    ...props
}) => {
    const className = makeClassName(
        `font-bold text-5xl whitespace-pre-line ${textAlign}`,
        _className,
    )
    return <p {...props} className={className} >{text}</p>
}