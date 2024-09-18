import React/*, {useState} */from 'react'
import PropTypes from 'prop-types'


export default function About(props) {
    /* const [Mode, setMode] = useState({
        color : "Black",
        backgroundColor : "White",
        border : '2px Solid Black'
    });
    const [btnText, changeBtnText] = useState('View in Dark Mode')
    const toggleMode = () => {
        if(Mode.color === 'Black'){
            setMode({
                color : 'White',
                backgroundColor : 'Black',
                border : '1px Solid White'
            })
            changeBtnText('View in Light Mode')
        }
        else{
            setMode({
                color : 'Black',
                backgroundColor : 'White',
               
            })
            changeBtnText('View in Dark Mode')
        }
    } */
  return (
    <>
    <div className="container my-3" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white',border : props.modeForm==='light'?'1px solid black':'1px solid white'}}>
    <h3>{props.title}</h3>
      <div class="accordion accordion-flush" id="accordionFlushExample" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}}>
        <div class="accordion-item" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}}>
            <h2 class="accordion-header" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}}>
            <button class="accordion-button collapsed" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Developed By :
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">This App is Developed by Mr. Jarajana Harshith.</div>
            </div>
        </div>
        <div class="accordion-item" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}}>
            <h2 class="accordion-header" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}}>
            <button class="accordion-button collapsed" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Purpose :
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">This purpose is to be able to help people in handling various common use of texts.</div>
            </div>
        </div>
        <div class="accordion-item" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}}>
            <h2 class="accordion-header" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}}>
            <button class="accordion-button collapsed" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Developers Purpose :
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Solely for the purpose of Learning.</div>
            </div>
        </div>
      </div>
      </div>
      {/*<div className="container my-3 mx-3">
        <button className="btn btn-primary" onClick={toggleMode}>{btnText}</button>
      </div>*/}
    </>
  )
}

About.propTypes = {
    Title : PropTypes.string.isRequired
}

About.defaultProps = {
    Title : "About the App"
}