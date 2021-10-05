import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FormComponent from './FormComponent';
import LoginComponent from './LoginComponent';
import useToken from '../useToken';
import AboutComponent from './AboutComponent';
import MonthViewComponent from './MonthViewComponent';

const MainComponent = () => {

    const { token, setToken } = useToken();

    if (!token) {
        return (
            <div>
                <HeaderComponent />
                <div className="wrapper">
                    <LoginComponent setToken={setToken} />
                </div>
            </div>
        );
    }

    return (
        <div>
            <HeaderComponent />
            <div className="wrapper">
                <Switch>
                    <Route exact path="/">
                        <FormComponent />
                    </Route>
                    <Route path="/about">
                        <AboutComponent />
                    </Route>
                    {/* <Route path="/:monthName" component={MonthViewComponent}>
                        {/* <MonthViewComponent /> */}
                    {/* </Route> */}
                </Switch>
            </div>
        </div>
    )
}

export default MainComponent;