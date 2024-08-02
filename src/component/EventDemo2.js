import React, {Component} from 'react';

export default class EventDemo2 extends Component {

    evenrHandleClick1 = (param) => {
        alert("chào mừng bạn đến với " + param);
    }

    evenrHandleClick2 = () => {
        alert("event 2");
    }


    render() {
        return (
            <div className={"alert alert-success"}>
                <h2>Even demo 2</h2>
                {/*gọi hàm có tham số*/}
                <button onClick={() => this.evenrHandleClick1("bình nguyên vô tận")}> Button 1</button>
                {/*gọi hàm khoogn có tham số*/}
                <button onClick={this.evenrHandleClick2}> Button 2</button>
                {/*gọi hàm -> arrow funtion*/}
                <button onClick={() => this.evenrHandleClick2}> Button 3</button>
            </div>
        );
    }
}
