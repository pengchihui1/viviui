import React from 'react'
import { IconButton } from '@chakra-ui/core'

const EditButton = (props) => {
  return (
    <IconButton
      as='div'
      icon='edit'
      {...props}
    />
  )
}

export default EditButton
