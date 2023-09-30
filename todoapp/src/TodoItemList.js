import React, { Component } from "react";

const TodoListItems=(props)=>{
        return (
            <div>
                <input type="checkbox" checked={props.completed}/>
                <span> {props.title} </span>
                <button>Delete Todo Items</button>
            </div>
        )
    }

export default TodoListItems;    