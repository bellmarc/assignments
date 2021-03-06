import React from 'react';


function Button(props){
    return (
        <div>
            <button onClick={props.blackOrWhiteToggle}>Click Me</button>
            <div>
                <button className="lavenderBtn"
                        onClick={props.lavenderToggle}>Click Me
                </button>
            </div>
            <div>
                <button className="blueLeftBtn"
                        onClick={props.blueLeft}>Click Me
                </button>
            </div>
            <div>
                <button className="blueRightBtn"
                        onClick={props.blueRight}>Click Me
                </button>
            </div>
        </div>
    )
}


export default Button