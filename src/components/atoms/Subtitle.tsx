import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { makeClassName } from "../../utils/textUtil";

interface TextProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
    textAlign? : string;
    text: string;
}

export const Subtitle: FC<TextProps> = ({
    className: _className,
    textAlign = 'text-center',
    text,
    ...props
}) => {
    const className = makeClassName(
        `font-semibold ${textAlign}`,
        _className,
    )
    return <p {...props} className={className} >{text}</p>
}