import React from 'react'

const initState = {
    item: {
        Personal: {
            name: 'Personal',
            icon: 'fas fa-user',
            progress: 0,
            background: {
                from: 'rgb(255, 98, 98)',
                to: 'rgb(255, 169, 71)'
            },
            task: [
                {
                    id: 0,
                    name: 'Dating',
                    date: 'Today',
                    finish: true
                }
            ]
        },
        Work: {
            name: 'Work',
            icon: 'fas fa-briefcase',
            progress: 0,
            background: {
                from: 'rgb(91, 157, 249)',
                to: 'rgb(71, 191, 255)'
            },
            task: [{
                id: 1,
                name: 'Design Sprint',
                date: 'Today',
                finish: true
            }, {
                id: 2,
                name: 'Icon Set Design for Mobile App',
                date: 'Today',
                finish: true
            }, {
                id: 3,
                name: 'Weekly Report',
                date: 'Today',
                finish: true
            }, {
                id: 4,
                name: 'Design Meeting',
                date: 'Today',
                finish: false
            }, {
                id: 5,
                name: 'Quick Prototyping',
                date: 'Tomorrow',
                finish: false
            }, {
                id: 6,
                name: 'UX Conference',
                date: 'Tomorrow',
                finish: false
            },
            ]
        },
        Home: {
            name: 'Home',
            icon: 'fas fa-home',
            progress: 0,
            background: {
                from: 'rgb(44, 125, 89)',
                to: 'rgb(59, 167, 118)'
            },
            task: [{
                id: 7,
                name: 'House Keeping',
                date: 'Today',
                finish: false
            },{
                id: 8,
                name: 'Html / Css Style',
                date: 'Tomorrow',
                finish: false
            }]
        },
    },
    detail: {
        open: false,
        originStyle: {},
        action: {},

    },
    editing: {
        open: false,
        addTask: null
    }
}

function reducer(state, action) {
    console.log(state)
    switch (action.type) {
        case 'GET_PERSONAL_TASK':
            let item = {
                Personal: {
                    name: 'Personal',
                    icon: 'fas fa-user',
                    progress: 0,
                    task: action.task,
                    background: {
                        from: 'rgb(255, 98, 98)',
                        to: 'rgb(255, 169, 71)'
                    }
                },
                Work: state.item['Work'],
                Home: state.item['Home']
            }
            return Object.assign({}, state, { item: item })
        case 'GET_WORK_TASK':
            let item_1 = {
                Personal: state.item['Personal'],
                Work: {
                    name: 'Work',
                    icon: 'fas fa-briefcase',
                    progress: 0,
                    task: action.task,
                    background: {
                        from: 'rgb(91, 157, 249)',
                        to: 'rgb(71, 191, 255)'
                    }
                },
                Home: state.item['Home']
            }
            return Object.assign({}, state, { item: item_1 })
        case 'GET_HOME_TASK':
            let item_2 = {
                Personal: state.item['Personal'],
                Work: state.item['Work'],
                Home: {
                    name: 'Home',
                    icon: 'fas fa-home',
                    progress: 0,
                    task: action.task,
                    background: {
                        from: 'rgb(44, 125, 89)',
                        to: 'rgb(59, 167, 118)'
                    }
                }
            }
            return Object.assign({}, state, { item: item_2 })
        case 'SET_DETAIL':
            let detail = {
                open: !state.detail.open,
                action: state.detail.action,
                originStyle: state.detail.originStyle
            }
            return Object.assign({}, state, { detail: detail })
        case 'GET_ORIGINSTYLE':
            let detail_1 = {
                open: state.detail.open,
                action: state.detail.action,
                originStyle: action.originStyle
            }
            return Object.assign({}, state, { detail: detail_1 })
        case "GET_ACTION":
            let detail_2 = {
                open: state.detail.open,
                action: action.action,
                originStyle: state.detail.originStyle
            }
            return Object.assign({}, state, { detail: detail_2 })
        case 'SET_EDITING':
            let editing = {
                open: !state.editing.open,
                addTask: state.addTask
            }
            return Object.assign({}, state, { editing: editing })
        case 'GET_ADDTASK':
            let editing_1 = {
                open: state.editing.open,
                addTask: action.addTask
            }
            return Object.assign({}, state, { editing: editing_1 })
        default:
            break;
    }

}

const ThemeContext = React.createContext(null)
function ThemeProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initState)
    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {
                props.children
            }
        </ThemeContext.Provider>
    )

}


export { ThemeProvider, ThemeContext }