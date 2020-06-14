import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const NavTabs = ({ value, handleChange }) => {
    return <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" />
        <Tab label="Comments" />
        <Tab label="Contact" />
    </Tabs>
}