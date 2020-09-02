import React, { Children } from 'react'

import WbgPage from './wbgPage'
import PageTitle from './pageTitle'

const Page = ({ title, nodivider = false, children, ...props }) => {
  let pageTitle = null
  const headerPage = null

  const chil = []

  Children.map(children, (c, i) => {
    switch (c.type) {
      case PageTitle:
        if (!pageTitle) pageTitle = []
        pageTitle.push(c) // 頭部
        break
      default:
        chil.push(c)// 頭部以外的 children
    }
  })

  return (
    <WbgPage title={title} headerPage={pageTitle} nodivider={nodivider} {...props}>
      {chil}
    </WbgPage>
  )
}

export default Page
