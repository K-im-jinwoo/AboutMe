import { MessageLeft, MessageRight } from "../molecules";

export const MessageList = () => {
    return (
        <section className="nes-container">
            <section className="message-list">
                <MessageLeft text="동의대학교 재학생 Kim Jin Woo 입니다" />
                <MessageRight text="무엇을 알려주시나요 ?" />
                <MessageLeft text="프론트엔드 개발자를 준비하면서 했던 프로젝트, 제가 누구인지 알려드릴게요 " />
            </section>
        </section>
    )
};