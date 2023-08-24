import { Title } from "../atoms"
import { Navbar } from "../organisms/Navbar"

export const LayoutTemplate = () => {
    return (
        <>
            <header className="flex justify-between">
                <Title text="About JW" textAlign="text-left"/>
                <Navbar/>
            </header>
        </>
    )

}