// @ts-ignore
// @ts-ignore
// @ts-ignore

import {ICharacter} from "../../models/ICharacter";
import {ReactNode} from "react";
import './CharterComponent.css'

interface CharcterComponent {
    item: ICharacter,
    children: ReactNode,
}




export const CharcterComponent= ({item, children}: CharcterComponent)=>{
    return(
        <div className='my-20 border-2'>
            <h3 className='text-2xl'>{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};