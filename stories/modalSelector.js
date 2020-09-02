import React, { useState } from 'react'
import NextLink from 'next/link'
import { IconButton, Button } from '@chakra-ui/core'
import { action } from '@storybook/addon-actions'

import ModalSelector from '../src/components/modalSelector/index'
import ModalSelectorOption from '../src/components/modalSelector/modalSelectorOption'
import Media from '../src/components/media'
import MediaCenter from '../src/components/media/mediaCenter'
import MediaLeft from '../src/components/media/mediaLeft'
import MediaRight from '../src/components/media/mediaRight'

export default { title: 'ModalSelector(vivi hui)' }

export const ModalSelectorTest = () => {
  const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')

  return (
    <Media center>
      <MediaLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Button>新增</Button>
          </a>
        </NextLink>
      </MediaLeft>
      <MediaCenter>
        <ModalSelector
          modalTitle='Dashboard 選擇'
          value={values}
          onChange={setValues}
        >
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2019/2020 Dashboard'>cdsj6 2019/2020 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>cdsj6 2020/2021 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>cdsj6 2021/2022 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
        </ModalSelector>
      </MediaCenter>
      <MediaRight>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <IconButton icon='edit' />
          </a>
        </NextLink>
      </MediaRight>
    </Media>
  )
}
