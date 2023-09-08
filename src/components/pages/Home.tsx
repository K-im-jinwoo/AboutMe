import { Intro, About, LayoutTemplate, Portfolio, Contact } from "../templates"

export const Home = () => {
    return (
        <>
            <LayoutTemplate>
                {/* <MessageList></MessageList> */}
                <Intro />
                <About />
                <Portfolio/>
                <Contact />
            </LayoutTemplate>
        </>
    )
}