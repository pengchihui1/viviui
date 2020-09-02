import React from 'react'
import {
  List,
  ListItem,
  Link,
  Heading,
  Box
} from '@chakra-ui/core'
import { FaSchool, FaUserEdit } from 'react-icons/fa'
import { AiTwotoneSetting } from 'react-icons/ai'
import { GoTrashcan } from 'react-icons/go'
import NextLink from 'next/link'
import { action } from '@storybook/addon-actions'

import Management from '../src/components/page/manageMent'
import ColumnLine from '../src/components/page/columnIconText'

import Page from '../src/components/page'
import PageTitle from '../src/components/page/pageTitle'
import PageHeader from '../src/components/page/pageHeader'
import PageBody from '../src/components/page/pageBody'
import PageFooter from '../src/components/page/pageFooter'

export default {
  title: 'Page(hui vivi)'
}

export const ManagementTest = () => {
  const data = [
    { icon: FaSchool, name: '修改学校' },
    { icon: FaUserEdit, name: '学校用户' },
    { icon: GoTrashcan, name: '批量新增' },
    { icon: AiTwotoneSetting, name: '专长设定' },
    { icon: AiTwotoneSetting, name: '智能设定' }
  ]
  return (
    <Page
      title={
        <PageTitle>
          管理员
        </PageTitle>
      }
    >
      <Management
        px='5%'
        subTitle='你是管理员，可以拥有以下操作...'
      >
        <List spacing={3}>
          {
            data.map((item, index) =>
              <ListItem key={index}>
                <NextLink
                  href='/test' passHref
                  _hover={{
                    textDecoration: 'none'
                  }}
                >
                  <a onClick={action('button-click')}>
                    <ColumnLine icon={item.icon} color='#316bc3'>{item.name}</ColumnLine>
                  </a>
                </NextLink>
              </ListItem>)
          }
        </List>
      </Management>
    </Page>
  )
}

export const Pages = () => {
  return (
    <Page>
      <PageHeader color='#FF00FF'>头部</PageHeader>
      <PageBody color='#FF00FF'>中部</PageBody>
      <PageFooter color='#FF00FF'>底部</PageFooter>
    </Page>
  )
}
