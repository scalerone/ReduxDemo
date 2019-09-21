import React, {Component} from 'react';

class TodoList extends Component {
    render() {
        return (
            <div>
                <div><input /><button>提交</button></div>
                <ul>
                    <li>Hello</li>
                </ul>
            </div>
        );
    }
}

export default TodoList;