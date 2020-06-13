import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './App.css';

const Home = () => <div>You're on the Home Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;

const App = ({ match, history }) => {
  const { path } = match;
  const [value, setValue] = useState(0);
  useEffect(() => {
    let value = 0;
    if (history.location.pathname === `${path}` || history.location.pathname === `${path}/home`) {
      value = 0;
    }
    else if (history.location.pathname === `${path}/comments`) {
      value = 1;
    } else if (history.location.pathname === `${path}/contact`) {
      value = 2;
    }
    setValue(value);
  }, [history]);
  const handleChange = (event, newValue) => {
    newValue === 0 && history.push(`${path}`);
    newValue === 1 && history.push(`${path}/comments`);
    newValue === 2 && history.push(`${path}/contact`);
    setValue(newValue);
  };
  const handleLogoClick = () => {
    history.push(`${path}`);
    setValue(0);
  }

  return (
    <div>
      <h1>Hey welcome home!</h1>
      <div onClick={() => handleLogoClick()} className="logo">
        LOGO
      </div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <div className="links">
        <Link to={`${path}`} className="link">Home</Link>
        <Link to={`${path}/comments`} className="link">Comments</Link>
        <Link to={`${path}/contact`} className="link">Contact</Link>
      </div>
      <div className="tabs">
        <Switch>
          <Route path={`${path}`} exact component={Home} />
          <Route path={`${path}/comments`} component={Comments} />
          <Route path={`${path}/contact`} component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
