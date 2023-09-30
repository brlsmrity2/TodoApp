import React, { Component } from "react";
import TodoListItem from "./TodoItemList";
import './Styles.css'


export default class TodoList extends React.Component{

    state ={
        list_title:"My Todo list",
        todos:[
            {
                title:"Go Gym",
                completed : false
            },
            {
                title:"Go Shopping",
                completed : false
            },
            {
                title:"Go yoga",
                completed : true
            }
        ]
    }
    render() {
        return (
            <div className="todo-list">
              <h2> To do List....</h2>
              <label> Title</label>
              <br></br>
              <input placeholder="Enter Title.." type="text" value={this.state.list_title}></input>
              <br></br>
              {
                this.state.todos.map(todos=>{
                    return(
                        <TodoListItem title={todos.title} completed={todos.completed} />
                    )
                })
              }
              <input placeholder="To do Item.." type="text"></input>
              <button>Add To-do Item</button>
            </div>
        )
    }

}