import React from 'react'

import userImg from './userImg.jpg'
import './IndexContext.scss'

function IndexContext() {
    return (
        <div className='index-context'>
            <div className='userImg'>
                <div className='img'>
                    <img src={userImg} alt='img' />
                </div>
            </div>
            <div className='userName'>
                <h1>Hello,Jane</h1>
            </div>
            <div className='userContext'>
                <p>Looks like feel good.</p>
                <p>You have 3 tasks to do today</p>
            </div>
        </div>
    )
}
export default IndexContext