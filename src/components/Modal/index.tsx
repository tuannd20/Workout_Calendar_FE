import React from "react";
import { RiCloseLine } from "react-icons/ri";
import './style.css';

const Modal = ({setIsOpen}: any) => {
    return (
        <>
            <div className={'Modal-darkBG'} onClick={() => setIsOpen(false)}/>
            <div className={'Modal-centered'}>
                <div className={'Modal'}>
                    <div className={'Modal-header'}>
                        <h5 className={'Heading'}>Add workout</h5>
                    </div>
                    <button className={'closeBtn'} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <form>
                        <div className={'modelForm'}>
                            <h5 className={'nameWorkout'}>Name: </h5>
                            <input className={'nameInputWorkout'} />
                        </div>
                        <div className={'modelForm'}>
                            <h5 className={'nameWorkout'}>Date: </h5>
                            <input className={'nameInputWorkout'} />
                        </div>
                    </form>
                    <div className='modalActions'>
                        <div className='actionsContainer'>
                            <button className='addBtn'>Add</button>
                            <button className='cancelBtn' onClick={() => setIsOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;