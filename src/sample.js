import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Sample = () => (
    <Router>
        <div>
<Button color="primary"><Link to="/">Home</Link></Button>
<Button color="primary"><Link to="/att">Sample test</Link></Button>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/att" component={Att} />
    </div>
    </Router>
    
)
const Homepage = () => (
    <div> 
        <h1>Home</h1>
        Welcome to Blockchain attendance..!
        <h2>Blocktandance is a blockchain based student attendance system</h2>
    </div>
    
);

const Att = () => (
    <div>
        <h1>Attendance Check</h1>
    </div>
);

export default Sample;
