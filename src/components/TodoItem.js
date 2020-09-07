import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox"/>
            <p>{props.item}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default TodoItem