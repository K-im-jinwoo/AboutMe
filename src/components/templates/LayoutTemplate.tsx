import React, { FC } from "react"
import { Title } from "../atoms"
import { Navbar, Dropdown } from "../organisms"

interface LayoutTemplateProps {
    children: React.ReactNode;
  }
  

export const LayoutTemplate: FC<LayoutTemplateProps> = ({children}) => {
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
            <main>
                {children}
            </main>
        </>
    )

}