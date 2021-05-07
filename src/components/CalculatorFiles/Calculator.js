import React,{useState} from 'react'
import { Button, Container , Current, Previous, Screen } from '../Styled';


function Calculator() {

    const [previous, setPrevious] = useState('')
    const [current, setCurrent] = useState('')
    const [operation, setOperation] = useState('')



    const appendValue = (el) =>{
        const value = el.target.getAttribute('data')

        if(value==='.' && current.includes('.')) return
        setCurrent(current + value);
        
    }

    const ClearData = () =>{
        setCurrent("");
        setPrevious("");
        setOperation("");
    }
     const DeleteDigit = () =>{
         setCurrent(String(current).slice(0,-1))
     }

     const chooseOperation = (op) =>{
         const operator = op.target.getAttribute('data');
         setOperation(operator);
         if(current === '') return
         if(previous !== ''){
            
             let value = compute();
             setPrevious(value)
            
         }else{
             setPrevious(current)
             
         }

         setCurrent('')
         setOperation(operator);
    }

    const equals = () =>{
        let value = compute();
        if(value === undefined || value === null) return

        setCurrent(value)
        setPrevious('')
        setOperation('')
    }

    const compute = () =>{
        let result;
        let previousNumber = parseFloat(previous);
        let currentNumber = parseFloat(current)

        if(isNaN(previousNumber) || isNaN(currentNumber)) return

        switch(operation){
            case '/':
                result = previousNumber / currentNumber;
                break;
            case 'x':
                result = previousNumber * currentNumber;
                break;
            case '+':
                result = previousNumber + currentNumber;
                break;
            case '-':
                result = previousNumber - currentNumber;
                break;
        }
        return result;


    }
  return (
        <div>
            <Container>
                <Screen>
                    <Previous> {previous} {operation} </Previous>
                    <Current>{current}</Current>
                </Screen>
                <Button gridSpan={2} control onClick={ClearData} >AC</Button>  {/*1*/} 
                <Button control onClick={DeleteDigit}>DEL</Button>    {/*2*/} 
                <Button data={'/'} onClick={chooseOperation} operation>/</Button>    {/*3*/} 
                <Button data={'7'} onClick={appendValue}>7</Button>              {/*4*/} 
                <Button data={'8'} onClick={appendValue}>8</Button>              {/*5*/} 
                <Button data={'9'} onClick={appendValue}>9</Button>               {/*6*/} 
                <Button data={'x'} onClick={chooseOperation} operation>x</Button>    {/*7*/} 
                <Button data={'4'} onClick={appendValue}>4</Button>               {/*8*/} 
                <Button data={'5'} onClick={appendValue}>5</Button>               {/*9*/} 
                <Button data={'6'} onClick={appendValue}>6</Button>               {/*10*/} 
                <Button data={'+'} onClick={chooseOperation} operation>+</Button>    {/*11*/} 
                <Button data={'1'} onClick={appendValue}>1</Button>               {/*12*/} 
                <Button data={'2'} onClick={appendValue}>2</Button>               {/*13*/} 
                <Button data={'3'} onClick={appendValue}>3</Button>               {/*14*/} 
                <Button data={'-'} onClick={chooseOperation} operation>-</Button>    {/*15*/} 
                <Button period data={'.'} onClick={appendValue}>.</Button>       {/*16*/}    
                <Button data={'0'} onClick={appendValue}>0</Button>               {/*17*/} 
                <Button gridSpan={2} equals onClick={equals}>=</Button>   {/*18*/} 
            </Container>
        </div>
    )
}

export default Calculator
