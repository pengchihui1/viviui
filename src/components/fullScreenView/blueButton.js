import React from 'react'
import {
  Button,
  Box
} from '@chakra-ui/core'

const BlueButton = React.forwardRef(({ leftIcon, rightIcon, children, ...props }, ref) => {
  return (
    <Button
      as='a'
      size='lg'
      w={{ base: '98%', sm: '340px' }}
      variantColor='blue'
      borderRadius='9999px'
      ref={ref}
      {...props}
    >
      {leftIcon}
      <Box
        d='flex'
        flex='1 0 auto'
        justifyContent='center'
        mt='-1px'
        ml='8px'
      >
        {children}
      </Box>
      {rightIcon}
    </Button>
  )
})

export default BlueButton
