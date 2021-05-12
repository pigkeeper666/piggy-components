import React from 'react'
import { Input as AntInput, Form } from 'antd'

const FormInput = (props: any) => {

  const { isRequired, ...other } = props
  return (
    <Form.Item
      label="账号"
      name="username"
      rules={[{ required: isRequired, message: '请输入' }]}
      {...other}
    >
      <AntInput />
    </Form.Item>
  )
}

export default FormInput

export const  FormInputInfo = {
  id: 'FormInput',
  name: 'FormInput',
  description: '表单项-输入框',
  attr: {
    label: '表单项',
    name: 'name',
    isRequired: true,
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