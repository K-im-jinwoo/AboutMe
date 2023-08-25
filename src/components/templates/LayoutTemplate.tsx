import { Title } from "../atoms"
import { Navbar, Dropdown } from "../organisms"

export const LayoutTemplate = () => {
    return (
        <>
            <header className="flex justify-between m-4">
                <Title text="About JW" textAlign="text-left"/>
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