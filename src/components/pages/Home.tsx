import { MessageList } from "../organisms"
import { Intro, LayoutTemplate } from "../templates"

export const Home = () => {
    return (
        <>
            <LayoutTemplate>
                {/* <MessageList></MessageList> */}
                <Intro />
            </LayoutTemplate>
        </>
    )
}