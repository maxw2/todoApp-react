import React from 'react'

import TodoTask from './TodoTask'
import { ThemeContext } from '../../state/ThemeContext'
import './IndexNav.scss'

function IndexNav() {
    const [state, dispatch] = React.useContext(ThemeContext)
    const item = state.item
    let bodyEl = document.getElementsByTagName('body')[0]
    let backImg = ['-webkit-gradient(linear, 0% 100%, 0% 0%, color-stop(0.3, rgb(255, 98, 98)), to(rgb(255, 169, 71)))',
        '-webkit-gradient(linear, 0% 100%, 0% 0%, color-stop(0.3, rgb(91, 157, 249)), to(rgb(71, 191, 255)))',
        '-webkit-gradient(linear, 0% 100%, 0% 0%, color-stop(0.3, rgb(44, 125, 89)), to(rgb(59, 167, 118)))']
    function handleStart(e) {
        let key = e.currentTarget.getAttribute('data-key')
        let task = item[key]
        let dispath = dispatch
        let el = document.querySelector('.index-nav-item')
        let elRect = el.getBoundingClientRect()
        let itemStyle = {
            borderRadius: '10px',
            top: elRect.top,
            // left: elRect.left,
            left: el.offsetLeft,
            width: elRect.width,
            height: elRect.height
        }
        dispath({ type: 'GET_ORIGINSTYLE', originStyle: itemStyle })
        dispath({ type: 'GET_ACTION', action: task })
        dispath({ type: 'SET_DETAIL' })
    }
    function handleMove(e) {

        let targetEl = e.currentTarget
        let downX = e.touches[0].clientX
        let moveX = null
        targetEl.ontouchmove = function (e) {
            moveX = e.touches[0].clientX
        }
        targetEl.ontouchend = function () {
            let dir = downX - moveX
            if (!moveX) return
            let num = Number(targetEl.getAttribute('data-index'))

            if (num === 0 && dir < 0) return
            if (num === targetEl.children.length - 1 && dir > 0) return
            // left
            if (dir < 0) num--
            // right
            if (dir > 0) num++

            targetEl.style.transform = `translate3d( ${-317 * num}px,0,0)`
            targetEl.setAttribute('data-index', num)

            // background Img 
            bodyEl.style.backgroundImage = backImg[num]



            targetEl.ontouchmove = null
            targetEl.ontouchend = null
            downX = null
            moveX = null


        }

    }
    return (
        <div className='index-nav'>
            <div className='date'>
                <span>{`Today： ${new Date().toDateString()}`}</span>
            </div>
            <div className='scroll'>
                <ul className='scroll-item'
                    data-index={0}
                    onTouchStart={handleMove}>
                    {
                        Object.keys(item).map((key, index) => {
                            return (
                                <li className={`${state.detail.open && state.detail.action.name === key ? "item_select" : 'item'} item-${key}`}
                                    key={index}
                                    data-key={key}
                                    onClick={handleStart}
                                    style={{ width: document.documentElement.clientWidth * 0.75 }}>
                                    <TodoTask {...item[key]} dispatch={dispatch} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default IndexNav