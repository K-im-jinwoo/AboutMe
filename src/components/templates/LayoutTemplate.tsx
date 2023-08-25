import { Title } from "../atoms"
import { Navbar, Dropdown } from "../organisms"

export const LayoutTemplate = () => {
    return (
        <>
            <header className="flex justify-between">
                <Title text="About JW" textAlign="text-left"/>
                <Navbar/>
                <Dropdown items={[
                    {text:"ddd"},
                    {text:"ddd"},
                    {text:"ddd"},
                    {text:"ddd"},
                    {text:"ddd"},
                    ]}/>
            </header>
        </>
    )

}