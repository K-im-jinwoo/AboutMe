import { FC } from "react";
import { Bcrikko, Text } from "../atoms";

interface MessageProps {
  text: string;
}

export const MessageLeft:FC<MessageProps> = ({text}) => (
    <section className="message -left flex items-center">
      <Bcrikko />
      <div className="nes-balloon from-left">
        <Text text={text}/>
      </div>
    </section>
  );
  
export const MessageRight:FC<MessageProps> = ({text}) => (
    <section className="message -right flex items-center justify-end">
      <div className="nes-balloon from-right">
        <Text text={text}/>
      </div>
      <Bcrikko />
    </section>
  );

