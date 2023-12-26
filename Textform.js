import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAleart("Uppercase ","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAleart("Lowercase ","success")
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAleart("Clear ","success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAleart("Speking ","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'  style={{color:props.mode==='dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark' ? '#042743' : 'white',color:props.mode==='dark' ? 'white' : '#042743'}} onChange={handleOnChange} id="mybox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>{" "}
                <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>{" "}
                <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>{" "}
                <button className="btn btn-primary" onClick={speak}>Speak</button>


            </div>
            <div className="container my-2" style={{color:props.mode==='dark' ? 'white' : '#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} charecter</p>
                <p>{0.008 * text.split(" ").length} Minitus read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text:"Enter something in the textbook above to preview it here."}</p>
            </div>
        </>
    )
}


