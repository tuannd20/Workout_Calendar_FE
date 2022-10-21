import React from 'react';
import './style.css';

const Col = (props: any) => {
    const dayName = props.dayName;
    const day = props.day;

    return (
        <div className={"Col"}>
            <div className={"Col-title"}>
                <h1 className={"Col-day-name"}>{dayName}</h1>
            </div>
            <h3 className={dayName === "Mon" ? "Col-day" : "Col-day-week"}>{day}</h3>
        </div>
    )
}

Col.defaultProps = {
    dayName: "Designer",
    day: "Adobe XD"
}

export default Col;