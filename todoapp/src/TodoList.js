import React, { Component } from "react";
import TodoListItem from "./TodoItemList";
import './Styles.css'


export default class TodoList extends React.Component{
    constructor(){
        super()
        this.state ={
            list_title:"",
            current_value:"",
            todos:[]
        }
        this.deleteTodoByIndex = this.deleteTodoByIndex.bind(this)
    }

    deleteTodoByIndex(index) {
        this.setState(prevState => ({
            todos: [
                ...prevState.todos.slice(0, index),
                ...prevState.todos.slice(index + 1)
            ]
        }));
    }
    

    render() {
        return (
          <div className="todo-list">
            <h2>To do List....</h2>
            <label>Title</label>
            <br />
            <input
              placeholder="Enter Title.."
              type="text"
              value={this.state.list_title}
              onChange={(event) => {
                this.setState({ list_title: event.target.value });
              }}
            />
            <br />
            {this.state.todos.map((todo,index) => {
              return (
              <TodoListItem
               key={index}
               index={index}
               deleteTodoByIndex={this.deleteTodoByIndex}
               title={todo.title} 
               completed={todo.completed} />)
            })}
            <input 
            placeholder="To do Item.."
             type="text"
             value={this.state.current_value}
             onChange={(event) => {
                this.setState({ current_value: event.target.value });
              }} />
            <button onClick={()=>{
                this.setState(prevState=>
                    ({
                        todos:prevState.todos.concat(
                            {title:this.state.current_value, completed:false}
                        ),
                        current_value :""
                    }

                )
                )
            }}>Add To-do Item</button>
          </div>
        );
      }
    }