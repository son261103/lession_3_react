import React, {Component} from 'react';

class ListRender extends Component {
    render() {
        let arr = ['HTML', 'CSS', 'JavaScript'];
        let element = arr.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        return (
            <div>
                <h1>List Render</h1>
                <ul>
                    {element}
                </ul>
            </div>
        );
    }
}

export default ListRender;