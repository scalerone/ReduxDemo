import React, {Component} from 'react';

import store from './redux/store'
class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() {
        return (
            <div>
                <div>

                    <input value={this.state.inputValue} />
                <button>提交</button>
                </div>
                <ul>
                    <li>Hello</li>
                </ul>
            </div>
        );
    }
}

export default TodoList;