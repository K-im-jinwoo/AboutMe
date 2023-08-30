import React, { FC } from "react"
import { useResponsive } from "../../contexts";
import { Header } from "./Header/Header";

interface LayoutTemplateProps {
    children: React.ReactNode;
  }
  

export const LayoutTemplate: FC<LayoutTemplateProps> = ({children}) => {
    const breakpoint = useResponsive()
    return (
        <>
            <Header />
            <main>
                {breakpoint !== 'md' && 
                    <div className="mt-24">
                        {children}
                    </div>
                } 

                {breakpoint === 'md' && 
                    <div className="mt-40">
                        {children}
                    </div>
                }
            </main>
        </>
    )

}