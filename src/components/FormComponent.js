import React, { useState } from 'react';
import { TABLE } from '../table';
import MonthViewComponent from './MonthViewComponent';

const FormComponent = () => {

    const [month, setMonth] = useState('Pick a month');

    const changeMonth = (event) => {
        setMonth(event.target.value);
        return;
    }

    const months = [
        'Pick a month',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const monthsList = months.map((month) => {
        return <option key={`/${month}`}>{month}</option>
    });

    const [date, setDate] = useState('');
    const [tips, setTips] = useState('');
    const [hours, setHours] = useState('');

    console.log(typeof(hours));

    function handleSubmit(event) {
        event.preventDefault();

        if (!date) {
            alert("Please pick the date of your work day");
        } else if (!tips) {
            alert("Please submit the sum of your tips for this day. If you had no tips, type '0'");
        } else if (!hours) {
            alert("Please submit the number of hours of your shift. If you worked less than one hour, type 0 in the hours column");
        } else {
            let day = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();
            let month = new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1): new Date().getMonth() + 1;
            let year = new Date().getFullYear();
            let today = year + '-' + month + '-' + day;
            
            console.log(month, day, today);

            if (date > today) {
                alert("The date you have selected is a future date");
                setDate('');
                setTips('');
                setHours('');
                return;
            }
            
            TABLE.push({
                date: date,
                tips: tips,
                hours: hours
            });
            console.log(TABLE);
            console.log(typeof(hours));
            setDate('');
            setTips('');
            setHours('');
        }
    }

    
    if (month !== 'Pick a month') {
        return <MonthViewComponent />
    } else {
        return (
            <div>
                <h1>Monthly Work Hours</h1>
                
                <div className="months-list">
                    <h3>Show month</h3>
                    <select value={month} onChange={(event) => changeMonth(event)}>
                        {monthsList}
                    </select>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <label htmlFor="tips">Tips:</label>
                    <input type="number" name="tips" value={tips} onChange={(e) => setTips(parseInt(e.target.value))} />
                    <label htmlFor="hours">Hours:</label>
                    <input type="number" name="hours" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default FormComponent;