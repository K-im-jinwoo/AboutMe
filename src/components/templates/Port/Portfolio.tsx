import { Button, Subtitle, Text } from '../../atoms'
import { MessageLeft } from '../../molecules'
import React, { FC, useEffect, useRef } from "react";

import { portText } from "../../../data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import style from './Portfolio.module.css'

export const Portfolio : FC = () => {
    const horizontalRef = useRef<HTMLDivElement | null>(null);
    const sectionsRef = useRef<(HTMLDivElement | null )[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: horizontal,
            start: "top 56px",
            end: () => "+=" + (horizontal?.offsetWidth || 0),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            },
        });
    
        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id={`${style.port}`} className={`w-full`} ref={horizontalRef}>
            <div className='p-4'>
                <MessageLeft text="Portfolio" className={`${style.port__title} w-full text-3xl`}/>
                <div className={`${style.port__wrap} flex flex-wrap`}>
                {portText.map((port, key) => (
                    <article className={`${style.port__item} p-10 mr-5 bg-slate-400`}
                    key={key} 
                    ref={(el: HTMLDivElement | null) => (sectionsRef.current[key] = el)}
                    >
                        <Text text={port.num}/>
                        <a href="#" className={`${style.img} block`}>
                            <img src="#" alt="#" className={`rounded saturate-0 `}/>
                        </a>
                        <Subtitle 
                        className={`${style.port__subtitle} text-2xl font-bold border-b-2 border-solid border-black`}
                        text={port.title}/>
                        <Text 
                        className={`${style.port__desc} text-base`}
                        text={port.desc}/>
                        <Button text='Site' className={`${style.site}`}/>
                        <Button text='Code'/>
                    </article>
                ))}
                </div>
            </div>
        </section>
    )    
}