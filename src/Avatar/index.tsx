import React from 'react'
// import 'antd/dist/antd.css'
import { Avatar as AntAvatar } from 'antd';

const Avatar = (props: any) => {

  const { src, size="large", ...other } = props

  return (
    <div {...other}>
      <AntAvatar size={size} src={src} />
    </div>
  )
}

export default Avatar

export const  AvatarInfo = {
  id: 'Avatar',
  name: 'Avatar',
  description: '头像',
  attr: {
    src: '',
    size: '64',
  },
  editor: [
    {
      attrName: 'src',
      label: '来源地址',
      type: 'String',
    },
    {
      attrName: 'size',
      label: '大小',
      type: 'String',
    },
  ]
}