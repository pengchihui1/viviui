import React from 'react'
import { Button } from '@chakra-ui/core'

const AddButton = ({ children, ...props }) => {
  return (
    <>
      <Button rounded='999px' size='md' width={{ base: '80px', md: '100px' }} {...props}>  {children} </Button>
    </>

  )
}

export default AddButton
