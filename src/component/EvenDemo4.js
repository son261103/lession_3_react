import React from 'react'

export default function EvenDemo4({onSubmit}) {

    const evenrHandleClick1 = () => {
        onSubmit("daya" , 1000);
    }

    return (
        <div className={"alert alert-info"}>
            <h2>Even Demo 4</h2>
            <button onClick={evenrHandleClick1}> click me </button>
        </div>
    );
}
