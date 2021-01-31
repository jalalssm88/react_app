import React, {Component} from 'react';
import './style.css'

class TodoScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo : '',
            todos:[
               
            ]
        }

    }

    changeText = (event) => {
        console.log('event', event.target.value)
        this.setState({
            todo:event.target.value
        })
    }

    submitHandler = () => {
        let date = new Date();
        let id = date.getTime()
        let newTodo = {
            id:id,
            todo:this.state.todo
        }
        
        this.setState({
            todos:[...this.state.todos, newTodo],
            todo:''
        })
    }

    render(){
         console.log('renderrr')
        return(
            <div>
                <h3>Todo Screen</h3>
                <div className="todoWraper">
                    <div className="inputContainer">
                        <input 
                            className="todoInput" 
                            type='text' 
                            placeholder="Type anything" 
                            value={this.state.todo} 
                            onChange={this.changeText} 
                        />
                    </div>
                    <div className="buttonContainer">
                        <button onClick={this.submitHandler} className=" "><p>Submit</p></button>
                    </div>
                    <div style={{clear:'both'}}></div>
                    <div>
                        {
                            this.state.todos.map(item=>{
                                console.log('item', item)
                                return(
                                    <p key={item.id}>{item.todo}</p>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default TodoScreen;
