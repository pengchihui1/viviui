import React from 'react'
import { Box, useColorMode } from '@chakra-ui/core'

const Card = React.forwardRef(({ onClick, title, children, ...props }, ref) => {
  const { colorMode } = useColorMode()
  return (
    <Box as='a' ref={ref}>
      <Box
        as='article'
        w={['45%', '30.5%', '22.5%', '22.6%']}
        p='20px'
        borderRadius='10px'
        d='inline-block'
        m={['2%', '1%', '1%', '1%']}
        shadow={colorMode === 'light' ? '2px 2px 6px 0px #b9b9b9' : '2px 2px 6px 0px #2D3748'}
        bg={colorMode === 'light' ? (props.bg || props.background || 'white') : (props.dark || '#1A202C')}
        {...props}
      >
        <Box
          as='h2'
          mb='30%'
          textAlign='left'
          fontSize={{ base: '16px', sm: '18px', md: '20px' }}
          fontWeight='bold'
        >
          {title}
          {children}
        </Box>
      </Box>
    </Box>
  )
}
)

export default Card
