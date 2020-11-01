import React from 'react'

class TodoForm extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            todoTask: ''
        };
    }
    
    handleChanges = (e) =>{
        this.setState({
            todoTask: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.todoTask);
        this.setState({todoTask: ''});
    };

    render(){
    return (
        <form onSubmit={this.handleSubmit}>
            
            <input
            type='text'
            task='todo'
            onChange={this.handleChanges}
            value={this.state.todoTask}
            />
            <button>Add</button>

        </form>
    );
    }
}

export default TodoForm;