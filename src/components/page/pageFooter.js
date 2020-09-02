import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const PageFooter = (props) => {
  return (
    <Box {...props}>
      {props.children}
    </Box>
  )
}
export default PageFooter
