import React, { Children } from 'react'
import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

import ButtonGrid from '../src/components/fullScreenView/buttonGrid'
import { BlueButton, FullScreenView } from '../src/index'

export default { title: 'Batch add(hui)' }

var arr = [1, 2, 3]
export const Batch = () => {
  const data = [
    {
      href: '',
      name: '批量新增用戶',
      as: 'sdfs'
    },
    {
      href: '',
      name: '批量新增班級',
      as: 'sdfs'
    },
    {
      href: '',
      name: '批量新增用戶圖片',
      as: 'sdfs'
    },

    {
      href: '',
      name: '批量新增班級成員',
      as: 'sdfs'
    }
  ]
  return (
    <FullScreenView>
      <ButtonGrid>
        {data.map((item, index) => {
          return (
            <NextLink href='/test' key={index} passHref>
              {/* <a onClick={action('button-click')}> */}
              <BlueButton>{item.name}</BlueButton>
              {/* </a> */}
            </NextLink>
          )
        })}
      </ButtonGrid>
    </FullScreenView>
  )
}
