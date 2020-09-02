import React from 'react'
import {
  Heading
} from '@chakra-ui/core'

// 白板標題
const PageTitle = (props) => {
  return (
    <Heading
      as='div'
      textAlign='center'
      size='lg'
      overflow='hidden'
      textOverflow='ellipsis'
      whiteSpace='nowrap'
      {...props}
    />
  )
}

export default PageTitle
