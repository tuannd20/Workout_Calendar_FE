import React, { useEffect, useState } from 'react';
import './style.css';
import { GrAdd } from "react-icons/gr";
import Modal from "../Modal/index";
import ItemWorkout from "../Item/index";
import { getWorkout } from '../../services/workout.service';

const Col = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [workout, setWorkout] = useState([]);
    const dayName = props.dayName;
    const day = props.day;
    const currentDay = new Date();

    const handleGetWorkout = async () => {
        const result = await getWorkout();
        setWorkout(result.data.data);
        console.log(workout);
        return result.data.data;
    }
    // const data = getWorkout();
    // const workout = data.then((value) => value.data) || [];
    // console.log(workout);

    const renderItemWorkout = () => {
        workout.map((workoutItem) => {
            console.log(workoutItem);
            return workoutItem;
        });
    }

    useEffect(() => {
        handleGetWorkout();
    }, [])

    return (
        <div className={"Col"}>
            <div className={"Col-title"}>
                <h1 className={"Col-day-name"}>{dayName}</h1>
            </div>
            <h3 className={dayName === currentDay.toString().slice(0, 3) ? "Col-day" : "Col-day-week"}>{day}</h3>
            <button className={"Col-btn"} onClick={() => setIsOpen(true)}>
                <GrAdd />
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            <ItemWorkout />
        </div>
    )
}

Col.defaultProps = {
    dayName: 'Sat',
    day: '10'
}

export default Col;