import * as React from 'react';
import { AppState, DayModel } from '../types/CalendarModel';
import ItemOfDay from './ItemOfDay';

interface IPropsDay {
    selectedDay: DayModel;
    days: Date;
}

export class ListOfDay extends React.Component<IPropsDay, any>{

    constructor(props: IPropsDay) {
        super(props);
        this.daysInMonth = this.daysInMonth.bind(this);
        
    
    }
    daysInMonth(days: Date) {
        var currentYear = days.getFullYear();
        var month = days.getMonth()+1;
        return  new Date(currentYear, month, 0).getDate();
    }
    render() {
        let items = [];
        let FullWeek = 6;
        var fullMonth = this.daysInMonth(this.props.days);
        var rest = FullWeek - this.props.days.getDay();
        var count = 0;
        if (rest != 0) {
            for (var j = 1; j <= rest; j++) {
                count++;
                items.push(<li key={count}></li>)
            }
        }
        
        for (var i = 1; i <= fullMonth;  i++) {
            count++;

            items.push(<ItemOfDay key={count} item ={i}/>)
        }

        return (
            <div>
                <ul className="flex-row flex-between weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>
                <ul className="days flex-row flex-wrap">
                    {items}
                </ul>
            </div>
        )
    }
}
export default ListOfDay;


