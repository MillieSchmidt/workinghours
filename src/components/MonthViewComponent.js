import React from 'react';
import { TABLE } from '../table';

const MonthViewComponent = (props) => {

    console.log(props.match);
    
    const month = 'hello world' //props.match.params.monthName;

    let tipsSum = 0;

    let hoursSum = 0;

    const tableRow = TABLE.map((row) => {
        return (
            <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.tips}</td>
                <td>{row.hours}</td>
            </tr>
        )
    })

    for (let i = 0; i < TABLE.length; i++) {
        tipsSum += TABLE[i].tips;
        hoursSum += TABLE[i].hours;
    }

    console.log(TABLE);
    return (
        <div>
            <h1>{month}</h1>
            <table>
                <thead>
                    <tr>
                        <td>DATE</td>
                        <td>TIPS</td>
                        <td>HOURS</td>
                    </tr>
                </thead>
                <tbody>
                    {tableRow}
                    <tr>
                        <td>SUM</td>
                        <td>{tipsSum}</td>
                        <td>{hoursSum}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MonthViewComponent;