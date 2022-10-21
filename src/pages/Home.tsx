import React from "react";
import './Home.style.css'
import Col from '../components/Column/index';
import { data } from '../mock/index';

const HomePage = () => {
    return (
        <div className='row'>
            { data.map(item => {
                return <Col dayName={item.dayName} day={item.day} />
            })}
        </div>
    );
};

export default HomePage;