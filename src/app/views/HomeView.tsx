
import * as React from 'react';
import { Link } from 'react-router';
import Hello from '../components/Hello';
import NetPontoPorto from '../components/NetPontoPorto';

var HomeView = React.createClass({
    getInitialState: function() {
        return { loaded: false };
    },
    
    componentDidMount: function() {
        this.setState({ loaded: true });
    },
    
    render: function() {
        var loading = this.state.loaded ? "" : " (loading...)";
        return <div>
            <h1>HomeView {loading}</h1>
            <Hello name="world" />
            <NetPontoPorto date={new Date()}></NetPontoPorto>
            <div><Link to="/about">About</Link></div>
        </div>;
    }
});

export default HomeView;
