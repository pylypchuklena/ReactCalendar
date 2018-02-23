import * as React from 'react';
import { AppState, DayModel } from '../types/CalendarModel';
import ItemOfDay from './ItemOfDay';

interface IPropsDay {
    selectedDay: Date;
    days: Date;
    selectDay:(date:Date)=>void;
}

export class ListOfDay extends React.Component<IPropsDay, any>{

    constructor(props: IPropsDay) {
        super(props);
        this.daysInMonth = this.daysInMonth.bind(this);
        this.selectDay = this.selectDay.bind(this);
    }

    daysInMonth(days: Date) {
        var currentYear = days.getFullYear();
        var month = days.getMonth()+1;
        return  new Date(currentYear, month, 0).getDate();
    }

    selectDay(day:number){
        var selectedDay = new  Date(this.props.days.getFullYear(),this.props.days.getMonth(),day);
        this.props.selectDay(selectedDay);
    }

    render() {
        let items = [];
        var fullMonth = this.daysInMonth(this.props.days);
        var rest = this.props.days.getDay();
        var count = 0;
        if (rest != 0) {
            for (var j = 1; j < rest; j++) {
                count++;
                items.push(<li key={count}></li>)
            }
        }
        
        for (var i = 1; i <= fullMonth;  i++) {
            count++;
            var isChecked = this.props.selectedDay!=null && 
                        this.props.selectedDay.getFullYear() == this.props.days.getFullYear() &&
                        this.props.selectedDay.getMonth() == this.props.days.getMonth() &&
                        this.props.selectedDay.getDate() == i;
            items.push(<ItemOfDay key={count} item ={i} OnCheckedDay={this.selectDay} isChecked={isChecked}/>)
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


