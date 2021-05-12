import React from 'react'
const Grid = (props: any) => {
  const { children, style, ...otherProps } = props
  return (
    <div
      style={{...style }}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default Grid

export const GridInfo =   {
  id: 'Grid',
  name: 'Grid',
  description: '左右Grid',
  attr: {
    style: {
      boxSizing: 'border-box',
      background: 'rgb(240, 242, 245)',
      border: '0px',
      padding: '10px',
      margin: '10px 0',
      minHeight: '300px',
      position: 'relative',
      display: 'flex',
      boxShadow: '0 2px 10px rgb(0 0 0 / 8%)'
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
      ],
      type: 'Style',
    },
  ],
  children: [
    {
      id: 'Grid-Tcol-default1',
      name: 'Tcol',
      description: '容器，用于包含内容',
      attr: {
        style: {
          boxSizing: 'border-box',
          background: 'rgb(245, 245, 245)',
          border: '1px dotted gray',
          width: '100%',
          margin: '0',
          padding: '5px',
          minHeight: '300px',
          position: 'relative',
          boxShadow: '0 2px 10px rgb(0 0 0 / 8%)',
          flex: '1 1 0',
          textAlign: 'left',
          lineHeight: 'normal'
        },
      },
      children: [],
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
              attrName: 'width',
              label: '宽度',
              type: 'String',
            },
            {
              attrName: 'margin',
              label: '外边距',
              type: 'String',
            },
            {
              attrName: 'padding',
              label: '内边距',
              type: 'String',
            },
            {
              attrName: 'minHeight',
              label: '最小高度',
              type: 'String',
            },
            {
              attrName: 'boxShadow',
              label: '阴影',
              type: 'String',
            },
            {
              attrName: 'flex',
              label: 'flex比例',
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
    },
    {
      id: 'Grid-Tcol-default1',
      name: 'Tcol',
      description: '容器，用于包含内容',
      attr: {
        style: {
          boxSizing: 'border-box',
          background: 'rgb(245, 245, 245)',
          border: '1px dotted gray',
          width: '100%',
          margin: '0',
          padding: '5px',
          minHeight: '300px',
          position: 'relative',
          boxShadow: '0 2px 10px rgb(0 0 0 / 8%)',
          flex: '1 1 0',
          textAlign: 'left',
          lineHeight: 'normal',
        },
      },
      children: [],
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
              attrName: 'width',
              label: '宽度',
              type: 'String',
            },
            {
              attrName: 'margin',
              label: '外边距',
              type: 'String',
            },
            {
              attrName: 'padding',
              label: '内边距',
              type: 'String',
            },
            {
              attrName: 'minHeight',
              label: '最小高度',
              type: 'String',
            },
            {
              attrName: 'boxShadow',
              label: '阴影',
              type: 'String',
            },
            {
              attrName: 'flex',
              label: 'flex比例',
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
    },
  ],
}