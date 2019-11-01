import React from 'react'

import IndexTitle from './IndexTitle'
import IndexContext from './IndexContext'
import IndexNav from './IndexNav'
import TodoDetail from '../Index/TodoDetail'
import TodoButt from '../Index/TodoButt'
import TodoEdi from '../Index/TodoEdi'
import { ThemeContext } from '../../state/ThemeContext'

function Index() {
    const state = React.useContext(ThemeContext)[0]
    console.log('index')
    const openDetail = state.detail.open
    const openEdi = state.editing.open

    return (
        <div className='index'>
            <IndexTitle />
            <IndexContext />
            <IndexNav />
            {/*  */}
            {
                openDetail ? <TodoDetail /> : null
            }
            {
                openDetail ? <TodoButt /> : null
            }
            {/*  */}
            {
                openEdi ? <TodoEdi /> : null
            }
        </div>
    )
}


export default Index 