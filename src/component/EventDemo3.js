import React, {Component} from 'react';

class EventDemo3 extends Component {

    constructor(props) {
        super(props);
        // khởi tạo đối tuowngj
        this.state = {
            name: "Phạm Lê Sơn",
            age: 18,
            email: "wqBqB@example.com"
        }
    }

    // hàm xử lý sự kiện, lấy dữ liệu trong state và chuyển lên component app thông qua props
    eventHandleClick = () => {
    //     chuyển lên app
        this.props.onReciver(this.state.name)
    }

    render() {
        return (
            <div className={"alert alert-danger"}>
                <h2>Sử dng dữ liệu state, props</h2>
                <hr/>
                <p>Xin chào {this.state.name}</p>
                <button onClick={this.eventHandleClick}>Chuyển dữ liệu name lên app thông qua props</button>
                <hr/>
                <p>Xin chào {this.props.renderCompany}</p>
                <p>Email: {this.state.email}</p>

            </div>
        );
    }
}

export default EventDemo3;