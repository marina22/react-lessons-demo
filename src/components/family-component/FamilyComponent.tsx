import {simpsons} from "../../data/data.ts";
import {CharcterComponent} from "../charcter-component/CharcterComponent.tsx";

export const FamilyComponent=() =>{
    return(
        <div>
            {
                simpsons.map(value => <CharcterComponent/>)
            }

        </div>
    );
};