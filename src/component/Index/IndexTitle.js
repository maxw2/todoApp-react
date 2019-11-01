import React from 'react'

import './IndexTitle.scss'

function IndexTitle() {
    return (
        <div className='index-title'>
            <div className='align-left'>
                <i className='fas fa-align-left'></i>
            </div>
            <div className='title'>
                <span>TODO</span>
            </div>
            <div className='search'>
                <i className='fas fa-search'></i>
            </div>
        </div>
    )
}

export default IndexTitle