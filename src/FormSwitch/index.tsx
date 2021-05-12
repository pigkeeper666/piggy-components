import React from 'react'
import { Switch as AntSwitch, Form } from 'antd'

const FormSwitch = (props: any) => {

  const { nameAndField, width, isRequired, multipleMode, ...other } = props

  return (
    <Form.Item
      label="开关"
      name="username"
      rules={[{ required: isRequired, message: '请输入' }]}
      valuePropName="checked"
      {...other}
    >
      <AntSwitch />
    </Form.Item>
  )
}

export default FormSwitch

export const FormSwitchInfo = {
  id: 'FormSwitch',
  name: 'FormSwitch',
  description: '表单项-开关',
  attr: {
    label: '表单项',
    name: 'name',
    isRequired: true,
    multipleMode: 'none',
  },
  editor: [
    {
      attrName: 'label',
      label: '名称',
      type: 'String',
    },
    {
      attrName: 'name',
      label: '表单项标识',
      type: 'String',
    },
    {
      attrName: 'isRequired',
      label: '是否必填',
      type: 'Bool',
    },
  ]
}