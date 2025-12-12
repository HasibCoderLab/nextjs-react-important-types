'use client'
import Button from '@/Button';
import React, { useRef, useState } from 'react'

const page = () => {
 const [count ,setCount] = useState<number>(0);
function fn() {
  
}
const input = useRef<HTMLInputElement>(null)
  return (
    <div>
      <form action="">
        <input type="text" name="" id=""  ref={input}/>
      </form>
      <Button data='Hasib'  action={fn}></Button>
    </div>
  )
}

export default page