import React from 'react'
import './TaskList.scss'

function TaskList(props) {
    return (
        <div className='task-list'>
            <input id={`task-${props.id}`}
                data-id={`${props.id}`}
                type='checkbox'
                checked={props.finish ? true : false}
                onClick={(e) => { e.stopPropagation() }}
                onChange={props.onCheckbox} />
            <label htmlFor={`task-${props.id}`}>
                <div className='checkbox'>
                    <i className={props.finish ? 'fas fa-check check-action' : 'fa fa-check'}
                    ></i>
                </div>
                {props.name}
            </label>
            {
                props.finish ?
                    <span className='trash' onClick={props.onDelCheck}>
                        <i className='fas fa-trash-alt'
                            data-id={`${props.id}`}></i>
                    </span> : null
            }

        </div>
    )
}

export default TaskList