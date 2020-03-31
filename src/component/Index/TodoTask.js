import React from 'react'
import TaskList from './TaskList'
import './TodoTask.scss'

function TodoTask(props) {
    let item = props
    let dispatch = props.dispatch
    const [proNum, setNum] = React.useState(0)
    React.useEffect(() => {
        let task = item.task
        let totalNum = task.length
        let finNum = 0
        for (let i = 0; i < totalNum; i++) {
            if (task[i].finish) {
                finNum++
            }
        }
        let perNum = isNaN(Math.round(finNum / totalNum * 100)) ?
            0 : Math.round(finNum / totalNum * 100)
        setNum(perNum)
    }, [item])
    function onCheckbox(e) {
        let el = e.target
        let taskId = Number(el.getAttribute('data-id'))
        let taskCheck = el.checked
        let newTask = item.task
        for (let i = 0; i < newTask.length; i++) {
            if (newTask[i].id === taskId) {
                newTask[i].finish = taskCheck
                dispatch({ type: `GET_${item.name.toUpperCase()}_TASK`, task: newTask })
            }
        }
    }
    function onDelCheck(e) {
        let el = e.target
        let taskId = Number(el.getAttribute('data-id'))
        let newTask = item.task
        for (let i = 0; i < newTask.length; i++) {
            if (newTask[i].id === taskId) {
                newTask.splice(i, 1)
                dispatch({ type: `GET_${item.name.toUpperCase()}_TASK`, task: newTask })
            }
        }
    }
    const style = {
        transform: `translate3d(0, 
            ${document.querySelector('.index-nav-item') ?
                document.querySelector('.index-nav-item').clientHeight - 90 - 95 : 10}px, 
                0)`
    }
    return (
        <div className='index-nav-item'>
            <div className='context'  >
                <div className='title'>
                    <div className='user'>
                        <div style={{ color: item.background.from }}>
                            <i className={item.icon}></i>
                        </div>
                    </div>
                </div>
                <div className='body' style={style}>
                    <div className='body-tips'>
                        {`${Object.keys(item.task).length} Tasks`}
                    </div>
                    <div className='body-title'>
                        <p>{item.name}</p>
                    </div>
                    <div className='body-progress'>
                        <span className='progress-line'>
                            <i style={{ width: proNum + '%' }}></i>
                        </span>
                        <span className='progress-num'>{`${proNum}%`}</span>
                    </div>
                    <div className='body-task' >
                        <h4>Today</h4>
                        <ul className='task-ul'>
                            {
                                item.task.map((val, index) => {
                                    if (val.date !== 'Today') return null
                                    return (
                                        <li className={`task-${val.id}`} key={val.id}>
                                            <TaskList {...val}
                                                onCheckbox={onCheckbox}
                                                onDelCheck={onDelCheck}
                                                index={index} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {/*  */}
                        <h4>Outdated</h4>
                        <ul className='task-ul'>
                            {
                                item.task.map((val, index) => {
                                    if (val.date !== 'Tomorrow') return null
                                    return (
                                        <li className={`task-${val.id}`} key={val.id}>
                                            <TaskList {...val}
                                                onCheckbox={onCheckbox}
                                                onDelCheck={onDelCheck}
                                                index={index} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoTask 