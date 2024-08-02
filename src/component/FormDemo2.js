import React, {Component} from 'react';

class FormDemo2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentName: "Phạm Lê Sơn",
            studentAge: 18,
            studentClass: ""
        }
    }

    handleChange = (event) => {
        // lấy tên điều khiển
        // this.setState({
        //     studentName: event.target.value,
        //     studentAge: event.target.value,
        //     studentClass: event.target.value
        // })
        let name = event.target.name;
        let age = event.target.age;
        // lấy giá trị của điều khi được thay đổi
        let value = event.target.value;
        // cập nhật state khi thay đổi
        this.setState({
            [name]: value,
            [age]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <div className={"alert alert-danger my-3 p-3"}>
                <form className={"my-3"}>
                    <div className="form-group">
                        <label htmlFor="name">Student Name</label>
                        <input type="text" className="form-control" id="studentName" value={this.state.studentName}
                               name={'studentName'} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Student Age</label>
                        <input type="text" className="form-control" id="studentAge" value={this.state.studentAge}
                               name={'studentAge'} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Lớp</label>
                        <select className="form-select"
                                value={this.state.studentClass}
                                onChange={this.handleChange}
                                name={'studentClass'}
                                aria-label="Default select example">
                            <option selected>Chọn khóa hoc</option>
                            <option value="1">IT 1</option>
                            <option value="2">IT 2</option>
                            <option value="3">IT 3</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success my-3" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormDemo2;