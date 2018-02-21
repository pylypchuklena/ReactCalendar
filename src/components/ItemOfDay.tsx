import * as React from 'react';
import { AppState, DayModel } from '../types/CalendarModel';

interface IPropsDay{
    // selectedDay: DayModel;
    item:  number;
    // isChecked: boolean;
    // OnCheckedDay:()=>void;
}

export class ItemOfDay extends React.Component<IPropsDay, any>{

    /**
     *
     */
    constructor(props:IPropsDay) {
        super(props);
        
    }
    render(){
        return(
            <li 
            // className={"dayItem" + 
            // (this.props.isChecked ? 'selected' : '')
            // }
            // onClick={(e)=>{this.props.OnCheckedDay()}}
            >
                {this.props.item}
            </li>
        )
    }

}
export default ItemOfDay;