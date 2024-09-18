import React from 'react'

export default function Alert(props) {
    /* const capitalize = (word) => {
        const lower = word.toLowerCase();
        const result = lower.charAt(0).toUpperCase() + lower.slice(1)
        return {result};
    } */
    return (
        <div style={{height : '60px'}}>
        {props.makeAlert && 
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <p>{props.makeAlert.typeof}<strong>{props.makeAlert.msg}</strong></p>
                {console.log(props.makeAlert.typeof)}
            </div>}  
        </div>
    )
}
