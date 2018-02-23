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
        this.daySelected = this.daySelected.bind(this);
        var now = new Date();
        now.setDate(1);
        this.state={currentMonth: now, 
            selectedDay:null};
    
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
   
    daySelected(day:Date){
        this.setState({...this.state,selectedDay: day});
    }

    render(){
        return(
            <div className="container">
                <OptionComponent currentMonth={this.state.currentMonth} 
                OnMoveNext={this.OnMoveNext}
                OnMovePrev={this.OnMovePrev}/>
                <ListOfDay selectedDay={this.state.selectedDay} 
                selectDay={this.daySelected}
                days={this.state.currentMonth}/>
            </div>
        )
    }
}
export default AppComponent;