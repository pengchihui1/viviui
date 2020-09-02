import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const PageBody = (props) => {
  return (
    <Box {...props}>
      {props.children}
    </Box>
  )
}
export default PageBody
