import { Divbuttons } from "./styles"

export const Button = (props)=> {
  
    return (
        <Divbuttons type= 'button'>
            <button onClick={()=>{
                props.clearInput()
            }} className="orange">C</button>

            
            <button onClick={(e)=>{
                props.currentOperator(e.target.innerText)
            }} className="orange">*</button>

            <button onClick={(e)=>{
                props.currentOperator(e.target.innerText)
            }} className="orange">/</button>

            <button onClick={(e)=>{
                props.currentOperator(e.target.innerText)
            }} className="orange">+</button>

            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>7</button>

            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>8</button>

            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>9</button>

            <button onClick={(e)=>{
                props.currentOperator(e.target.innerText)
            }} className="orange">-</button>

            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>4</button>

            
            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>5</button>

            
            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>6</button>

            
            <button onClick={(e)=>{
                props.currentOperator(e.target.innerText)
            }} className="orange">%</button>

            
            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>1</button>

            
            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>2</button>

            
            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>3</button>
 
            <button onClick={(e)=>{
                props.currentOperator(e.target.innerText)
            }} className="orange">**</button>

            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>0</button>
            
            <button onClick={(e)=>{
                props.buttonClicked(e.target.innerText)
            }}>.</button>
            
            <button onClick={()=>{
                props.operation()
            }} className="orange">=</button>
        </Divbuttons>
    )
}