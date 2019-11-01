import React from 'react'

import { ThemeContext } from '../../state/ThemeContext'
import TodoTask from './TodoTask'
import './TodoDetail.scss'

function TodoDetail() {
    const [state, dispatch] = React.useContext(ThemeContext)
    React.useEffect(() => {
        let detailEl = document.querySelector('.todo-detail')
        let barEl = document.querySelector('.todo-bar')
        let bodyEl = document.querySelector('.todo-detail .index-nav-item .body')
        let butEl = document.querySelector('.todo-button')
        setTimeout(() => {
            detailEl.style = ''
            barEl.style = ''
            bodyEl.style = ''
            butEl.className = 'todo-button'
        }, 0)
    }, [])
    const item = state.detail.action
    const originStyle = state.detail.originStyle

    const barStyle = {
        position: 'absolute',
        opacity: 0,
        transform: 'translate3d(0,-200px,0)'
    }

    function handleEnd(e) {
        let bodyEl = document.querySelector('.todo-detail .index-nav-item .body')
        let detailEl = document.querySelector('.todo-detail')
        let barEl = document.querySelector('.todo-bar')
        let butEl = document.querySelector('.todo-button')
        window.addEventListener('transitionend', transEnd)
        bodyEl.style.transform = 'translate3d(0px, 210px, 0px)'
        Object.assign(detailEl.style, {
            borderRadius: '10px',
            width: `${originStyle.width}px`,
            height: `${originStyle.height}px`,
            top: `${originStyle.top}px`,
            left: `${originStyle.left}px`
        })
        Object.assign(barEl.style, {
            position: `${barStyle.position}`,
            opacity: `${barStyle.opacity}`,
            transform: `${barStyle.transform}`
        })
        butEl.className = 'todo-button todo-button-action'
    }
    function transEnd() {
        dispatch({ type: 'SET_DETAIL' })
        window.removeEventListener('transitionend', transEnd)
    }
    // 
    return (
        <div className='todo-detail' style={originStyle}>
            <div className='todo-bar' style={barStyle}>
                <div className='arrow' onClick={handleEnd}><i className='fas fa-angle-left'></i></div>
                <div className='option'><i className='fas fa-ellipsis-v'></i></div>
            </div>
            <TodoTask {...item} dispatch={dispatch} />
        </div>
    )
}

export default TodoDetail