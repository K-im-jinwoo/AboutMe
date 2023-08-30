import { useResponsive } from '../../../contexts'
import { Text, Subtitle } from '../../atoms'
import { MessageLeft } from '../../molecules'

import style from './About.module.css'

export const About = () => {
    const breakpoint = useResponsive()
    return (
        <section>
            {['sm', 'md'].includes(breakpoint) && 
                <div className={`${style.about__inner} flex justify-between p-4 flex-col`}>
                    <MessageLeft text="나에 대해서" className={`${style.about__title} sticky w-full text-3xl`}/>
                    <div className={`${style.about__desc} w-full`}>
                        <div>
                            <Text text='1.' className={`${style.about__num}`}/>
                            <Subtitle text='옷을 좋아한다.' className={`${style.about__subtitle} text-2xl underline`} textAlign='text-left'/>
                            <Text 
                            className={`${style.about__desc_text}`}
                            text='나는 다양한 옷을 좋아한다. 어렸을 때부터 내가 좋아하는 옷 입는 것을 좋아했고, 다양한 스타일을 좋아했다.
                                다른 사람들이 나의 스타일을 보았을 때 좋아해줬으면 좋겠다. 코딩도 이러한 점과 비슷하다고 생각한다.
                                나만의 스타일로 꾸미고, 개발하고싶다.
                            ' />
                        </div>
                        <div>
                            <Text text='2.' className={`${style.about__num}`}/>
                            <Subtitle text='옷을 좋아한다.' className={`${style.about__subtitle} text-2xl underline`} textAlign='text-left'/>
                            <Text 
                            className={`${style.about__desc_text}`}
                            text='나는 다양한 옷을 좋아한다. 어렸을 때부터 내가 좋아하는 옷 입는 것을 좋아했고, 다양한 스타일을 좋아했다.
                                다른 사람들이 나의 스타일을 보았을 때 좋아해줬으면 좋겠다. 코딩도 이러한 점과 비슷하다고 생각한다.
                                나만의 스타일로 꾸미고, 개발하고싶다.
                            ' />
                        </div>
                        <div>
                            <Text text='3.' className={`${style.about__num}`}/>
                            <Subtitle text='옷을 좋아한다.' className={`${style.about__subtitle} text-2xl underline`} textAlign='text-left'/>
                            <Text 
                            className={`${style.about__desc_text}`}
                            text='나는 다양한 옷을 좋아한다. 어렸을 때부터 내가 좋아하는 옷 입는 것을 좋아했고, 다양한 스타일을 좋아했다.
                                다른 사람들이 나의 스타일을 보았을 때 좋아해줬으면 좋겠다. 코딩도 이러한 점과 비슷하다고 생각한다.
                                나만의 스타일로 꾸미고, 개발하고싶다.
                            ' />
                        </div>
                    </div>
                </div>
            }
            
            
            {['lg', 'xl', '2xl'].includes(breakpoint) && 
                <div className={`${style.about__inner} flex justify-between p-4`}>
                    <MessageLeft text="나에 대해서" className={`${style.about__title} sticky`}/>
                    <div className={`${style.about__desc} w-1/2`}>
                        <div>
                            <Text text='1.' className={`${style.about__num}`}/>
                            <Subtitle text='옷을 좋아한다.' className={`${style.about__subtitle} text-2xl underline`} textAlign='text-left'/>
                            <Text 
                            className={`${style.about__desc_text}`}
                            text='나는 다양한 옷을 좋아한다. 어렸을 때부터 내가 좋아하는 옷 입는 것을 좋아했고, 다양한 스타일을 좋아했다.
                                다른 사람들이 나의 스타일을 보았을 때 좋아해줬으면 좋겠다. 코딩도 이러한 점과 비슷하다고 생각한다.
                                나만의 스타일로 꾸미고, 개발하고싶다.
                            ' />
                        </div>
                        <div>
                            <Text text='2.' className={`${style.about__num}`}/>
                            <Subtitle text='옷을 좋아한다.' className={`${style.about__subtitle} text-2xl underline`} textAlign='text-left'/>
                            <Text 
                            className={`${style.about__desc_text}`}
                            text='나는 다양한 옷을 좋아한다. 어렸을 때부터 내가 좋아하는 옷 입는 것을 좋아했고, 다양한 스타일을 좋아했다.
                                다른 사람들이 나의 스타일을 보았을 때 좋아해줬으면 좋겠다. 코딩도 이러한 점과 비슷하다고 생각한다.
                                나만의 스타일로 꾸미고, 개발하고싶다.
                            ' />
                        </div>
                        <div>
                            <Text text='3.' className={`${style.about__num}`}/>
                            <Subtitle text='옷을 좋아한다.' className={`${style.about__subtitle} text-2xl underline`} textAlign='text-left'/>
                            <Text 
                            className={`${style.about__desc_text}`}
                            text='나는 다양한 옷을 좋아한다. 어렸을 때부터 내가 좋아하는 옷 입는 것을 좋아했고, 다양한 스타일을 좋아했다.
                                다른 사람들이 나의 스타일을 보았을 때 좋아해줬으면 좋겠다. 코딩도 이러한 점과 비슷하다고 생각한다.
                                나만의 스타일로 꾸미고, 개발하고싶다.
                            ' />
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}