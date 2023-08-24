import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { makeClassName } from "../../utils/textUtil";

interface TextProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {textAlign? : string}

export const Subtitle: FC<TextProps> = ({
    className: _className,
    textAlign = 'text-center',
    ...props
}) => {
    const className = makeClassName(
        `font-semibold text-3xl whitespace-pre-line ${textAlign}`,
        _className,
    )
    return <p {...props} className={className} />
}