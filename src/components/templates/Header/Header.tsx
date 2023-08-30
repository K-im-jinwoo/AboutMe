import { Title } from "../../atoms"
import { Navbar, Dropdown } from "../../organisms"
import { useResponsive } from "../../../contexts";

// css
import style from './Header.module.css';

export const Header = () => {
    const breakpoint = useResponsive()
    return (
        <header id="header" className="fixed top-0 z-50 w-full">
            {breakpoint === 'sm' &&
                <div className={`${style.header__inner} flex justify-between align-center p-4`}>
                    <Title text="About JW" textAlign="text-left"/>
                     <Dropdown items={[
                        {text:"About Me"},
                        {text:"SKills"},
                        {text:"Project"},
                        {text:"Contact"},
                    ]}/>
                </div>
            }
            {breakpoint === 'md' &&   
                <div className={`${style.header__inner} p-4`}>
                    <Title text="About JW" textAlign="text-center" className="mb-5"/>
                    <Navbar />
                </div>
            }
            {['lg', 'xl', '2xl'].includes(breakpoint) &&  
                <div className={`${style.header__inner} flex justify-between align-center p-4`}>
                    <Title text="About JW" textAlign="text-left"/>
                    <Navbar />
                </div>
            }
        </header>
        
    )

}