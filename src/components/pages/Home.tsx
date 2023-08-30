import { Intro, About, LayoutTemplate } from "../templates"

export const Home = () => {
    return (
        <>
            <LayoutTemplate>
                {/* <MessageList></MessageList> */}
                <Intro />
                <About />
            </LayoutTemplate>
        </>
    )
}