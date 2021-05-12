import React from 'react'
// import 'antd/dist/antd.css'
import { PageHeader as AntPageHeader } from 'antd';

const PageHeader = (props: any) => {
  const { title, subTitle, isTransparent, ...others } = props
  return (
    <div  {...others}>
      <AntPageHeader
        onBack={() => window.history.back()}
        ghost={isTransparent}
        title={title}
        subTitle={subTitle}
      />
    </div>
  )
}

export default PageHeader

export const PageHeaderInfo =   {
  id: 'PageHeader',
  name: 'PageHeader',
  description: '页头',
  attr: {
    title: '默认标题',
    subTitle: '默认副标题',
    isTransparen: false,
  },
  editor: [
    {
      attrName: 'title',
      label: '标题',
      type: 'String',
    },
    {
      attrName: 'subTitle',
      label: '副标题',
      type: 'String',
    },
    {
      attrName: 'isTransparen',
      label: '是否透明',
      type: 'Bool',
    },
  ]
}