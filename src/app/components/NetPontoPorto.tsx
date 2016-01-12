import * as React from 'react';

export interface NetPontoPortoProps{
    date: Date;
}

export interface NetPontoPortoState{
    currentDate: Date;
}

export default class NetPontoPorto extends React.Component<NetPontoPortoProps, NetPontoPortoState> {
    constructor(props: NetPontoPortoProps){
        super(props);
    }
    
    render(): JSX.Element{
        return (<div>{this.props.date.toString()}</div>);
    }
}