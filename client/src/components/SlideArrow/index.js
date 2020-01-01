import React from 'react';

function SlideArrow(props) {
    return (
        <button style={{backgroud:"none", border:"none", position:"relative", left:100}}>
            {props.glyph}
        </button>

    )

}

export default SlideArrow; 