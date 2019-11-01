import React from 'react'

import { ThemeContext } from '../../state/ThemeContext'
import './TodoButt.scss'

function TodoButt() {
    const [state, dispatch] = React.useContext(ThemeContext)
    const item = state.detail.action
    const buttonStyle = {
        backgroundImage: `-webkit-gradient(linear, 0% 100%, 100% 0%, 
            color-stop(0.3, ${item.background.from}), to(${item.background.to}))`
    }
    function openEditing(e) {
        let butEl = e.currentTarget
        let open = state.editing.open
        // 关闭
        if (open) {
            butEl.className = 'todo-button'
            let addTask = state.editing.addTask
            if (addTask) addTask()
        }// 开启
        else if (!open) {
            butEl.className = 'todo-button todo-button-editing'
            dispatch({ type: 'SET_EDITING' })
        }
    }

    return (
        <button className='todo-button todo-button-action'
            onClick={openEditing}
            style={buttonStyle}></button>
    )

}

export default TodoButt