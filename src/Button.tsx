import React from 'react'

type buttonProps ={
    data:string,
    action:() => void 
}


const Button = ({data}:buttonProps) => {
  return (
    <div>
        Hello
    </div>
  )
}

export default Button