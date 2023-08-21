import { toHaveStyle } from '@testing-library/jest-dom/matchers';
import React, { Component} from 'react';

class Bayel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: '',
        }
    }

    handleInputChange = (e) => {
        this.setState({
          newTask: e.target.value
        })
      }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.newTask.trim() !=='') {
            const newTask = {
                id: Date.now(),
                text: this.state.newTask,
                completed: false,
            };
            this.setState((prevState) => ({
                tasks: [...prevState.tasks, newTask],
                newTask: '',
            }));
        }
    }


    render() {
        const {tasks, newTask} = this.state;


        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={newTask} onChange={this.handleInputChange}></input>
                    <button>Submit</button>
                </form>
                 <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <span
                            style = {{
                                textDecoration: task.completed ? "line-through" : "none",
                            }}
                            >
                                {task.text}
                            </span>
                        </li>
                    ))}
                </ul> 
            </div>
        ) 
    }
}


export default Bayel;