import React from 'react'
import {
  Flex,
  ButtonGroup
} from '@chakra-ui/core'

const HeaderCenter = ({ children, ...props }) => {
  return (
    <Flex
      justify='center'
      flex='10'
      {...props}
    >
      <ButtonGroup d='flex'>
        {children}
      </ButtonGroup>
    </Flex>
  )
}
export default HeaderCenter
