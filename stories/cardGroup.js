import React, { Children } from 'react'
import { Box } from '@chakra-ui/core'

import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

import Group from '../src/components/cardGroup'
import Card from '../src/components/cardGroup/card'

export default { title: 'cardGroup(vivi hui)' }

const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
export const GroupTest = () => {
  return (
    <>
      <Group>
        <NextLink href='/test' passHref>
          {/* <a onClick={action('button-click')}> */}
          <Card title='乙班' />
          {/* </a> */}
        </NextLink>
        <NextLink href='/test' passHref>
          {/* <a onClick={action('button-click')}> */}
          <Card title='乙班' />
          {/* </a> */}
        </NextLink>
        {
          data.map((item, index) => (
            <>
              <NextLink href='/test' key={index} passHref>
                {/* <a onClick={action('button-click')}> */}
                <Card title={item} />
                {/* </a> */}
              </NextLink>
            </>
          ))
        }
      </Group>

    </>
  )
}
export const OneGroup = () => {
  return (
    <>
      <Group>
        {Children.map(data, (item, index) => (
          <NextLink href='/Test' passHref>
            <Card title={item} />
          </NextLink>
        ))}
      </Group>
    </>
  )
}

const Button = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} onClick={props.onClick}>{props.children}</button>
  )
})
export const Test = () => {
  return (
    <NextLink href='https://www.baidu.com/' passHref>
      <Button>
        <span role='img' aria-label='so cool'>
          😀 😎 👍 💯
        </span>
      </Button>
    </NextLink>
  )
}
