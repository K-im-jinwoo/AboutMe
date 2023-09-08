import { useResponsive } from "../../../contexts"
import { Icon, Subtitle, Text } from "../../atoms"

import style from './Contact.module.css'

export const Contact = () => {
    const breakpoint = useResponsive()

    return (
       <section className={`${style.contact} h-screen`}>
        {['sm', 'md'].includes(breakpoint) && 
            <div className={`flex justify-center flex-col w-full h-full mt-4 p-4`}>
                <Subtitle 
                className={`${style.contact__title} bold tracking-tight`}
                text="I will tell you how to contact me."
                textAlign="text-left"
                />
                <div className={`flex flex-col justify-center items-center h-full`}>
                    <article className={`${style.contact__item} flex items-center justify-center rounded-xl w-full h-72 p-5 mt-5 bg-slate-100`}>
                        <Icon name="instagram" size="is-medium"/>
                        <Text className={`text-4xl font-bold border-b-2 border-solid border-black`} text="INSTAGRAM"/>
                    </article>

                    <article className={`${style.contact__item} flex items-center justify-center rounded-xl w-full h-72 p-5 mt-5 bg-slate-100`}>
                        <Icon name="github" size="is-medium"/>
                        <Text className={`text-4xl font-bold border-b-2 border-solid border-black`} text="GITHUB"/>
                    </article>  

                    <article className={`${style.contact__item} flex items-center justify-center rounded-xl w-full h-72 p-5 mt-5 bg-slate-100`}>
                        <Icon name="gmail" size="is-medium"/>
                        <Text className={`text-4xl font-bold border-b-2 border-solid border-black`} text="GMAIL"/>
                    </article> 
                </div>
            </div>     
        }

        {['lg', 'xl', '2xl'].includes(breakpoint) && 
            <div className={`flex items-end justify-end flex-col w-full h-full p-4`}>
                <Subtitle 
                className={`${style.contact__title} bold tracking-tight`}
                text="I will tell you how to contact me."
                textAlign="text-left"
                />
                <div className={`flex`}>
                    <article className={`${style.contact__item} flex items-center justify-center rounded-xl w-96 h-72 p-5 mr-5 bg-slate-100`}>
                        <Icon name="instagram" size="is-large"/>
                        <Text className={`text-4xl font-bold border-b-2 border-solid border-black`} text="INSTAGRAM"/>
                    </article>

                    <article className={`${style.contact__item} flex items-center justify-center rounded-xl w-72 h-72 p-5 mr-5 bg-slate-100`}>
                        <Icon name="github" size="is-large"/>
                        <Text className={`text-4xl font-bold border-b-2 border-solid border-black`} text="GITHUB"/>
                    </article>  

                    <article className={`${style.contact__item} flex items-center justify-center rounded-xl w-72 h-72 p-5 mr-5 bg-slate-100`}>
                        <Icon name="gmail" size="is-large"/>
                        <Text className={`text-4xl font-bold border-b-2 border-solid border-black`} text="GMAIL"/>
                    </article> 
                </div>
            </div>      
        }
       </section> 
    )
}