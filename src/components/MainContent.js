import React from "react"
import TodoItem from "../components/TodoItem"

function MainContent() {
    return (
        <div className="todo-list">
            <TodoItem item="Pears" price="1.50"/>
            <TodoItem item="Eggs" price="2.99"/>
            <TodoItem item="Milk" price="3.50"/>
            <TodoItem item="Cheese" price="5.50"/>
        </div>
    )
}

export default MainContent