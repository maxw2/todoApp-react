import React from 'react'

import { ThemeContext } from '../../state/ThemeContext'
import './TodoEdi.scss'

function TodoEdi() {
    const [state, dispatch] = React.useContext(ThemeContext)
    React.useEffect(() => {
        if (!state.editing.addTask) dispatch({ type: 'GET_ADDTASK', addTask: addTask })
        setTimeout(() => {
            const ediEl = document.querySelector('.todo-editing')
            ediEl.style = ''
        }, 0)
    })
    function closeEdi() {
        const ediEl = document.querySelector('.todo-editing')
        const butEl = document.querySelector('.todo-button')
        window.addEventListener('transitionend', traEnd)
        butEl.className = 'todo-button'
        ediEl.style.transform = 'translate3d(0,100%,0)'
    }
    function traEnd() {
        dispatch({ type: 'SET_EDITING' })
        window.removeEventListener('transitionend', traEnd)
    }
    function addTask() {
        let text = document.querySelector('.todo-editing .todo-body textarea')
        let value = text.value
        let item = state.detail.action

        if (value) {
            let stateTask = state.detail.action.task
            let newTask = {
                id: Math.random() * 100,
                name: value,
                date: 'Today',
                finish: false
            }
            stateTask.push(newTask)
            // dispatch({ type: `GET_${item.name.toUpperCase()}_TASK`, task: stateTask })
        }
        closeEdi()
    }
    return (
        <div className='todo-editing' style={{ transform: 'translate3d(0,100%,0)' }}>
            <div className='todo-bar'>
                <div className='close' onClick={closeEdi}></div>
                <span>New Tasks</span>
                <div><i className='fas fa-ellipsis-v'></i></div>
            </div>
            <div className='todo-body'>
                <p>What tasks are you planning to perform?</p>
                <textarea rows={3}></textarea>
                <div className='user'>
                    <i className='fas fa-user'></i>
                    <span>{state.detail.action.name}</span>
                </div>
                <div className='calendar'>
                    <i className='fas fa-calendar-alt'></i>
                    <span>Today</span>
                </div>
            </div>
        </div>
    )
}

export default TodoEdi