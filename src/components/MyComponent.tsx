import {FC} from "react";

type MyComponentProType = {text: string}


const MyComponent: FC <MyComponentProType> =  ({text}) =>{
    return <div className= 'text-3xl font-bold underlin'>
        {text}

            </div>
}
export default MyComponent;


////LKZ RJVBN