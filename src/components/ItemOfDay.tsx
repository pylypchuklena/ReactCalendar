import * as React from 'react';
import { AppState, DayModel } from '../types/CalendarModel';

interface IPropsDay{
    item:  number;
    isChecked: boolean;
    OnCheckedDay:(day:number)=>void;
}

export class ItemOfDay extends React.Component<IPropsDay, any>{
    constructor(props:IPropsDay) {
        super(props);
        
    }
    render(){
        return(
            <li 
            >
            <span 
               className={"dayItem " + 
                (this.props.isChecked ? 'selected' : '')
                }
                onClick={(e)=>{console.log("Click"); this.props.OnCheckedDay(this.props.item)}}>
                    {this.props.item}
                </span> 
            </li>
        )
    }

}
export default ItemOfDay;