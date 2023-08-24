import { FC } from 'react'
import {Navigation} from '../molecules'

export const Navbar: FC = () => (
    <Navigation 
        items={[
            {text:'About Me', path:'/'},
            {text:'Skills', path:'/'},
            {text:'Project', path:'/'},
            {text:'Contact', path:'/'},
        ]}
        className=''
    />
)