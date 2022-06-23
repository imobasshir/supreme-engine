import React from 'react'

export const Main = (props) => {
    return (
        <div className="container">
            <h4 className="text-center">To Do List</h4>
            {props.todos.map((todo) => {
                return (
                    <>
                        <h6 className='my-3'>{todo.title}</h6>
                        <p className='my-3'>{todo.desc}</p>
                        <button className="btn btn-sm btn-danger" key={props.sno} onClick={props.onDelete}>Delete</button>
                    </>
                )
            })}
        </div>
    )
}

