import React, { Component } from "react";
import TodoListItem from "./TodoItemList";


export default class TodoList extends React.Component{

    render() {
        return (
            <div>
                To do List....
                <TodoListItem/>
            </div>
        )
    }

}