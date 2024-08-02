import React, {Component} from 'react';

class FormDemo1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentName: "Phạm Lê Sơn"
        }
    }

    handleChange = (event) => {
        // lấy tên điều khiển
        // this.setState({
        //     studentName: event.target.value
        // })
        let name = event.target.name;
        // lấy giá trị của điều khi được thay đổi
        let value = event.target.value;
        // cập nhật state khi thay đổi
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("xin chèo " + this.state.studentName);
    }

    render() {
        return (
            <div className={"alert alert-secondary"}>
                <h1>Controlled Component</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Student Name</label>
                        <input type="text" className="form-control" id="studentName" value={this.state.studentName}
                               name={'studentName'} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary my-3" onClick={this.handleSubmit}>Submit</button>
                    <p>Xin chèo {this.state.studentName}</p>
                </form>
            </div>
        );
    }
}

export default FormDemo1;