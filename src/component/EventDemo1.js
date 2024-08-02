import React from 'react'

const evenrHandleClick1 = () => {
    alert("event 1");
}

const evenrHandleClick2 = () => {
    alert("event 2");
}

const evenrHandleClick3 = (param) => {
    alert("xin chào " + param);
}

export default function EventDemo1() {
    return (
        <div className={"alert alert-primary"}>
            <h1>EventDemo1</h1>
            {/* hàm được gọi một lần duy nhất */}
            {/*<button onClick={evenrHandleClick1()}> botton 1</button>*/}
            <button onClick={evenrHandleClick2}> botton 2</button>
            {/*gọi hàm -> arrow funtion*/}
            <button onClick={() => evenrHandleClick2()}> botton 02</button>

            {/*gọi hàm có tham số*/}
            <button onClick={() => evenrHandleClick3("sơn")}> botton 03 </button>
            {/*<button onClick={}></button>*/}
        </div>

    )
}
