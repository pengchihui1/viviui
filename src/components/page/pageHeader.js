import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const PageHeader = (props) => {
  return (
    <Box {...props}>
      {props.children}
    </Box>
  )
}
export default PageHeader
