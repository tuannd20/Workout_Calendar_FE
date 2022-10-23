import React from 'react';
import './style.css';
import { GrAddCircle } from "react-icons/gr";
// import Exercise from '../Exercise/index';

const ItemWorkout = () => {

    return (
        <div className='itemContainer'>
            <div className={'itemNameHeader'}>
                <h3>Item</h3>
            </div>
            <div className={'itemAddBtn'}>
                <GrAddCircle />
            </div>
        </div>
    )
}

export default ItemWorkout;