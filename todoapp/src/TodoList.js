import React, { Component } from "react";
import TodoListItem from "./TodoItemList";
import './Styles.css'


export default class TodoList extends React.Component{

    state ={
        list_title:"",
        current_value:"",
        todos:[]
        // [
        //     {
        //         title:"Go Gym",
        //         completed : false
        //     },
        //     {
        //         title:"Go Shopping",
        //         completed : false
        //     },
        //     {
        //         title:"Go yoga",
        //         completed : true
        //     }
        // ]
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
            {this.state.todos.map(todo => {
              return <TodoListItem title={todo.title} completed={todo.completed} />;
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