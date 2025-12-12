'use client'
import Button from '@/Button';
import React, { useRef, useState } from 'react'

const page = () => {
 const [count ,setCount] = useState<number>(0);
function fn() {
  
}

const handleSubmit = (e:React.FormEvent) =>{

}

const handleClick = (e:React.MouseEvent) =>{

}

const input = useRef<HTMLInputElement>(null)
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id=""  ref={input}/>
      </form>
      <button onClick={handleClick}></button>
      {/* <Button data='Hasib'  action={fn}></Button> */}
    </div>
  )
}

export default page