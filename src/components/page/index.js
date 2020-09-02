import React, { Children } from 'react'

import WbgPage from './wbgPage'
import PageTitle from './pageTitle'
import PageHeader from './pageHeader'
import PageBody from './pageBody'
import PageFooter from './pageFooter'

const Page = ({ title, nodivider = false, children, ...props }) => {
  let pageTitles = null
  let pageHeader = null
  let pageBody = null
  let pageFooter = null
  Children.map(children, (c, i) => {
    switch (c.type) {
      case PageTitle:
        if (!pageTitles) pageTitles = []
        pageTitles.push(c) // 頭部
        break
      case PageHeader:
        pageHeader = c
        break
      case PageBody:
        pageBody = c
        break
      case PageFooter:
        pageFooter = c
        break
      default:
        break
    }
  })
  return (
    <WbgPage title={title} pageTitle={pageTitles} nodivider={nodivider} {...props}>
      {pageHeader}
      {pageBody}
      {pageFooter}
    </WbgPage>
  )
}
export default Page
