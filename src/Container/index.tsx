import React from 'react';

const Container = (props: any) => {
  // 插槽
  const { children, style, ...otherProps } = props
  return (
    <div
      style={{ ...style }}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default Container

export const ContainerInfo = {
  id: 'Container',
  name: 'Container',
  description: '容器，用于包含内容',
  attr: {
    style: {
      boxSizing: 'border-box',
      background: 'rgb(240, 242, 245)',
      border: '1px dotted gray',
      minHeight: '300px',
      maxHeight: '',
      overflow: 'scroll',
      padding: '10px',
      margin: '10px 0px',
      boxShadow: '0 2px 10px rgb(0 0 0 / 8%)',
      textAlign: 'left',
      lineHeight: 'normal',
    },
  },
  editor: [
    {
      attrName: 'style',
      childAttr: [
        {
          attrName: 'background',
          label: '背景颜色',
          type: 'String',
        },
        {
          attrName: 'border',
          label: '边框',
          type: 'String',
        },
        {
          attrName: 'minHeight',
          label: '最小高度',
          type: 'String',
        },
        {
          attrName: 'maxHeight',
          label: '最大高度',
          type: 'String',
        },
        {
          attrName: 'padding',
          label: '内边距',
          type: 'String',
        },
        {
          attrName: 'margin',
          label: '外边距',
          type: 'String',
        },
        {
          attrName: 'boxShadow',
          label: '阴影',
          type: 'String',
        },
        {
          attrName: 'textAlign',
          label: '对齐方向',
          type: 'String',
        },
        {
          attrName: 'lineHeight',
          label: '行高',
          type: 'String',
        },
      ],
      type: 'Style',
    },
  ],
  children: [],
}


