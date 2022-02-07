const numberButtons=document.querySelectorAll('[data-number]')
const operationButtons=documnet.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equals')
const deleteButton=document.querySelector('[data-equals')
const clearButton=document.querySelector('[data-equals')
const OutputTextElement=document.querySelector('data-output')
const CurrentOperandTextElement= document.querySelector('data-current-operand')


class calculator{
constructor ( OutputTextElement, CurrentOperandTextElement ){
this.ConstructOutput=ConstructOutput
this.clear()
}
clear(){
this.currentOperand=''
this.OutputTextElement=''
this.operation=undefined

}
delete(){


}
appendNumber(number){
this.currentOperand=this.currentOperand.toString()+ number.toString()
}

chooseOperation(operation){

}

compute(){

    }

updateDisplay(){
        this.CurrentOperandTextElement.innerText=this.currentOperand
        
        }
        
}

const calculator= new calculator(CurrentOperandTextElement, OutputTextElement)

    numberButtons.forEach(button=>{
    button.addEventListener('click',() =>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    
        })

})