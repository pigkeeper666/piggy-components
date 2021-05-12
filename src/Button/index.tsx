import React from 'react'
import { Button as AntButton } from 'antd';
import { useHistory } from "react-router-dom";
import eventEmitter  from '../Event'

const Button = (props: any) => {
  const {
    value,
    type,
    eventType,
    componentName,
    jumpUrl,
    formName,
    ...others
  } = props
  const history = useHistory()

  const handleClick = () => {
    switch(eventType) {
      case 'refresh': {
        eventEmitter.emit(`${componentName}-load-data`, {})
        break;
      }
      case 'jump': {
        history.push(jumpUrl)
        break;
      }
      case 'modal': {
        eventEmitter.emit(`${formName}-set-visible`, {})
        break;
      }
      default: break;
    }
  }

  return (
    <span {...others} >
      <AntButton onClick={handleClick} type={type}>
        {value}
      </AntButton>
    </span>
  )
}

export default Button

export const ButtonInfo =   {
  id: 'Button',
  name: 'Button',
  description: '按钮',
  attr: {
    value: '默认按钮',
    type: 'primary',
    eventType: 'refresh',
    componentName: null,
    jumpUrl: null,
    formName: null,
  },
  editor: [
    {
      attrName: 'value',
      label: '默认按钮',
      type: 'String',
    },
    {
      attrName: 'type',
      label: '按钮类型',
      type: 'String',
    },
    {
      attrName: 'eventType',
      label: '事件类型',
      type: 'Enum',
      datasource: [{
        key: 'none',
        name: '无',
      },{
        key: 'refresh',
        name: '数据刷新',
      },{
        key: 'jump',
        name: '路由跳转',
      },{
        key: 'modal',
        name: '控制弹框',
      }],
    },
    {
      attrName: 'componentName',
      label: '组件名称',
      type: 'Relate',
      when: [{
        key: 'eventType',
        value: 'refresh'
      }]
    },
    {
      attrName: 'jumpUrl',
      label: '跳转地址',
      type: 'Relate',
      when: [{
        key: 'eventType',
        value: 'jump'
      }]
    },
    {
      attrName: 'formName',
      label: '表单名称',
      type: 'Relate',
      when: [{
        key: 'eventType',
        value: 'modal'
      }]
    }
  ]
}