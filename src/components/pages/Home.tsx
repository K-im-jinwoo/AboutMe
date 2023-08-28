import { MessageList } from "../organisms"
import { LayoutTemplate } from "../templates"

export const Home = () => {
    return (
        <>
            <LayoutTemplate>
                <MessageList></MessageList>
            </LayoutTemplate>
        </>
    )
}