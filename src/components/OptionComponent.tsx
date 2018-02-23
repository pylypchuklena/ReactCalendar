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
                <div className="arrow arrow-left" onClick={this.props.OnMovePrev}></div>
                <h1>
                    {this.props.currentMonth.toLocaleDateString('en-US',{month:'long', year:'numeric'})}
                </h1>
                <div className="arrow arrow-right " onClick={this.props.OnMoveNext}></div>
            </div>
        )
    }
}
export default OptionComponent;