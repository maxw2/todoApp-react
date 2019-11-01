import React from 'react'
import Cscroll from 'crash-scroll'

function Scroll(props) {
    let scroll = React.useRef(null)
    React.useEffect(() => {
        let CScroll = new Cscroll(scroll.current, props.options)
        console.log(CScroll)
    })
    return (
        <div ref={scroll} style={props.style}  className={props.className}>
            {
                props.children
            }
        </div>
    )

}

export default Scroll