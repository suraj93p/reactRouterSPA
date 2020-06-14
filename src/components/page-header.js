import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { Logo } from "./logo";
import { NavTabs } from "./nav-tabs";
import './style.css';

const Home = () => <div>You're on the Home Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;

const PageHeader = ({ match, history }) => {
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

    const onLogoClick = () => {
        history.push(`${path}`);
        setValue(0);
    }

    return <>
        <div>
            <div className="page-header">
                <Logo handleLogoClick={onLogoClick} />
                <NavTabs value={value} handleChange={handleChange} />
            </div>
            <Switch>
                <Route path={`${path}`} exact component={Home} />
                <Route path={`${path}/comments`} component={Comments} />
                <Route path={`${path}/contact`} component={Contact} />
            </Switch>
        </div>
    </>
}

export default withRouter(PageHeader);