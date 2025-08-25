import { Container,Content } from "./styles";
import { Button} from "./components/Button"; 
import { Input } from "./components/Input";
import { useState } from "react";
import logo from "./logo react/cdnlogo.com_react (1).svg"



const App = ()=> {

  
  const [currentNumber, setCurrentNumber] = useState(0)
  const [firstNbr, setFrstNbr] = useState(0)
  const [operador, setOperador] = useState()
  
  const buttonClicked = (number)=>{
    setCurrentNumber(prev =>`${prev===0 ? '' : prev}${number}`)
  }

  const clearInput = ()=>{
    setCurrentNumber(0)
  }

  const currentOperator= (sinal)=>{
    clearInput()
    setFrstNbr(currentNumber)
    setOperador(sinal)
  }

  const operation = ()=>{

    if(operador=== "+"){
      setCurrentNumber( Number(firstNbr) + Number(currentNumber))  
    }
    if(operador=== "-"){
      setCurrentNumber( Number(firstNbr) - Number(currentNumber))  
    }
    if(operador=== "*"){
      setCurrentNumber( Number(firstNbr) * Number(currentNumber))  
    }
    if(operador=== "/"){
      setCurrentNumber( Number(firstNbr) / Number(currentNumber))  
    }
    if(operador=== "**"){
      setCurrentNumber( Number(firstNbr) ** Number(currentNumber))  
    }
    if(operador=== "%"){
      setCurrentNumber( Number(firstNbr) * (Number(currentNumber)/100))  
    }
      
  }

  
  return (
    <Container>
      <div className="description">
        <h1>Calculadora React</h1>
        <img src={logo} alt="logo-react" title="logo"></img>
      </div>
      
      <Content>
        <Input value= {currentNumber}/>            
        <Button buttonClicked={buttonClicked} clearInput= {clearInput} operation = {operation} currentOperator = {currentOperator}/>
      </Content>
    </Container>
  );
}

export default App;
