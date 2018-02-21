import * as React from 'react';
import OptionComponent from './OptionComponent';

import {AppState,DayModel} from '../types/CalendarModel';
import { ListOfDay } from './ListOfDay';

export class AppComponent extends React.Component<any,AppState>{
    /**
     *
     */
    constructor(props:any) {
        super(props);
        this.OnMovePrev = this.OnMovePrev.bind(this);
        this.OnMoveNext = this.OnMoveNext.bind(this);
        
        this.state={currentMonth: new Date(),  checkedDay: false, selectedDay : {id:new Date().getDate(), content: 0, isToday: true} };
    
    }
    OnMovePrev(){
        var monthCurrent = this.state.currentMonth;
        monthCurrent.setMonth(monthCurrent.getMonth()-1);
        this.setState({...this.state,currentMonth: monthCurrent});
    }
    OnMoveNext(){
        var monthCurrent = this.state.currentMonth;
        monthCurrent.setMonth(monthCurrent.getMonth()+1);
        this.setState({...this.state,currentMonth: monthCurrent});
    }
   

    render(){
        return(
            <div className="container">
                <OptionComponent currentMonth={this.state.currentMonth} 
                OnMoveNext={this.OnMoveNext}
                OnMovePrev={this.OnMovePrev}/>
                <ListOfDay selectedDay={this.state.selectedDay} 
                days={this.state.currentMonth}/>
            </div>
        )
    }
}
export default AppComponent;