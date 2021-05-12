import React from 'react'
import { Select as AntSelect, Form } from 'antd'

const { Option } = AntSelect

const FormSelect = (props: any) => {

  const { nameAndField, width, isRequired, multipleMode, ...other } = props

  return (
    <Form.Item
      label="账号"
      name="username"
      rules={[{ required: isRequired, message: '请输入' }]}
      {...other}
    >
      <AntSelect
        mode={multipleMode === 'multiple' ? 'multiple' : undefined}
        style={{ width: width }}
      >
        {nameAndField?.map((item: any) => (
          <Option value={item.key}>{item.title}</Option>
        ))}
      </AntSelect>
    </Form.Item>
  )
}

export default FormSelect

export const  FormSelectInfo = {
  id: 'FormSelect',
  name: 'FormSelect',
  description: '表单项-选择框',
  attr: {
    label: '表单项',
    name: 'name',
    width: '120px',
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
      attrName: 'width',
      label: '宽度',
      type: 'String',
    },
    {
      attrName: 'isRequired',
      label: '是否必填',
      type: 'Bool',
    },
    {
      attrName: 'nameAndField',
      label: '选项名与字段值',
      type: 'Muti',
      keys: ['title', 'key']
    },
    {
      attrName: 'multipleMode',
      label: '是否多选',
      type: 'Enum',
      datasource: [{
        key: 'none',
        name: '否',
      },{
        key: 'multiple',
        name: '是',
      }]
    },
  ]
}