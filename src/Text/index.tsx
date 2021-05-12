import React from 'react'

const Text = (props: any) => {
  const { style, value, ...others } = props
  return (
    <span style={{...style}} {...others}>{value}</span>
  )
}

export default Text

export const TextInfo =   {
  id: 'Text',
  name: 'Text',
  description: '文字',
  attr: {
    style: {
      background: 'inherit',
      fontSize: '16px',
      fontWeight: '400',
      color: 'black',
    },
    value: '默认文字'
  },
  editor: [
    {
      attrName: 'value',
      label: '文字内容',
      type: 'String',
    },
    {
      attrName: 'style',
      type: 'Style',
      childAttr: [
        {
          attrName: 'background',
          label: '背景颜色',
          type: 'String',
        },
        {
          attrName: 'fontSize',
          label: '字体大小',
          type: 'String',
        },
        {
          attrName: 'fontWeight',
          label: '字体粗细',
          type: 'String',
        },
        {
          attrName: 'color',
          label: '字体颜色',
          type: 'String',
        },
      ]
    }
  ]
}