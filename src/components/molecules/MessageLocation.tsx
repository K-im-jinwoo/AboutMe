import { FC } from "react";
import { Text } from "../atoms";

interface MessageProps {
  text: string;
  className?: string;
}

export const MessageLeft:FC<MessageProps> = ({text, className}) => (
    <section className={`message -left flex items-center h-full ${className}`}>
      <div className="nes-balloon from-left">
        <Text text={text}/>
      </div>
    </section>
  );
  
export const MessageRight:FC<MessageProps> = ({text, className}) => (
    <section className={`message -right flex items-center justify-end ${className}`}>
      <div className="nes-balloon from-right">
        <Text text={text}/>
      </div>
    </section>
  );

