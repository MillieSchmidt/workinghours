import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeButton from './backTest';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const HeaderComponent = () => {

    //const history = useHistory();

    // const goBack = () => {
    //     console.log("go back");
    // }

    return (
        <div>
            <nav>
                <span>Track Your Hours!</span>
                <button>Back</button>
            </nav>
        </div>
    )
}

export default HeaderComponent;