'use client'
import Button from '@/Button';
import React, { useState } from 'react'

const page = () => {
 const [count ,setCount] = useState<number>(0);
function fn() {
  
}
  return (
    <div>
      <Button data='Hasib'  action={fn}></Button>
    </div>
  )
}

export default page