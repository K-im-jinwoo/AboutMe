import { Subtitle, Text } from "../../atoms"

import style from './Intro.module.css'

export const Intro = () => {

    return (
        <section className="h-screen">
            <div className="flex flex-col justify-end items-start p-4">
                <Subtitle text="Kim Jin Woo" className={`${style.intro__title}`}/>
                <div className={`${style.intro__text} flex items-center justify-center flex-col w-full relative`}>
                    <Text text="안녕하세요" className={`${style.text} z-10 text-white`}/>
                    <Text text="프론트엔드 개발자를 향해서" className={`${style.text} z-10 text-white`}/>
                    <Text text="달려나가고 있습니다." className={`${style.text} z-10 text-white`} />
                    <i className={`${style.character_large } nes-ash absolute inset-1/2`}></i>
                </div>
            </div>
        </section>
    )
}