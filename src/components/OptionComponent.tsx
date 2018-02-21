import * as React from 'react';

interface IProps{
    currentMonth: Date;
    OnMovePrev:() =>void;
    OnMoveNext:() =>void;
}

export class OptionComponent extends React.Component<IProps,any>{

    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.OnMovePrev = this.OnMovePrev.bind(this)
    }
    OnMovePrev(e:any){
        this.props.OnMovePrev();
    }
    OnMoveNext(e:any){
        this.props.OnMoveNext();
    }

    render(){
        return(
            <div className="flex-row flex-between month">
                <button className="btn nav-item--btn" onClick={this.props.OnMovePrev}>Prev</button>
                <h1>
                    {this.props.currentMonth.toLocaleDateString('en-US',{month:'long', year:'numeric'})}
                </h1>
                <button className="btn nav-item--btn" onClick={this.props.OnMoveNext}>Next</button>
            </div>
        )
    }
}
export default OptionComponent;