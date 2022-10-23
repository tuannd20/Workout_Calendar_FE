import React from "react";
import './Home.style.css'
import Col from '../components/Column/index';
import { data } from '../mock/index';
import { getAllDays } from '../features/day';

const currentDate = new Date();

const responseAllDay = getAllDays(currentDate);
console.log(responseAllDay.map(d => d.toString()));

const HomePage = () => {
    return (
        <div className='row'>
            { responseAllDay.map(day => {
                return (
                    <Col dayName={day.toString().slice(0, 3)} day={day.toString().slice(8, 10)}> 
                    </Col>
                )
            })}
        </div>
    );
};

export default HomePage;