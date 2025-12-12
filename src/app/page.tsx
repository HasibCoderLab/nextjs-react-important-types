'use client'
import Button from '@/Button';
import React, { useState } from 'react'

const page = () => {
 const [count ,setCount] = useState<number>(0);

  return (
    <div>
      <Button data='Hasib'></Button>
    </div>
  )
}

export default page