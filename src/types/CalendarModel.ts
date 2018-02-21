
export class AppState{
    checkedDay: boolean;
    currentMonth: Date;
    selectedDay:DayModel;
}
export class DayModel{
    id: number;
    content: number;
    isToday: boolean;
}