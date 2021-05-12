import React, { useEffect } from 'react'
import { Form as AntForm, Button, message, Modal } from 'antd'
import { useState } from 'react'
import request from '../request'
import eventEmitter  from '../Event'
// import 'antd/dist/antd.css'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Form = (props: any) => {
  const [form] = AntForm.useForm();
  const [visible, setVisible] = useState(false)
  const [isloading, setLoading] = useState(false)
  const { children, targetApi, mode, displayType, name, componentName, eventType, ...others } = props


  useEffect(() => {
    eventEmitter.on(`${name}-set-visible`, setVisibleToTrue)
    return () => eventEmitter.off(`${name}-set-visible`, setVisibleToTrue)
  }, [name])

  const setVisibleToTrue = () => setVisible(true)

  const onFinish = (values: any) => {
    setLoading(true)
    request.post(targetApi, {...values})
      .then(res => {
        message.success('提交成功')
        if (eventType === 'refresh') {
          eventEmitter.emit(`${componentName}-load-data`, {})
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false)
        setVisible(false)
      })
  };

  const handleReset = () => {
    form.resetFields()
  }

  const renderForm = () => (
    <AntForm
      preserve={false}
      {...layout}
      form={form}
      name="basic"
      onFinish={onFinish}
      {...others}
    >
      <div style={{ border: '1x rpx dotted grey', minHeight: '100px', margin: 10}}>
        {children}
      </div>
      <AntForm.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{marginRight: 8}}
          loading={isloading}
        >
          提交
        </Button>
        <Button onClick={handleReset} loading={isloading}>
          重置
        </Button>
      </AntForm.Item>
    </AntForm>
  )

  const renderTrueForm = () => {
    if (displayType === 'modal') {
      return (
        <Modal
          destroyOnClose
          title="Basic Modal"
          visible={visible}
          footer={null}
          onCancel={() => setVisible(false)}
        >
          {renderForm()}
        </Modal>
      )
    }
    return renderForm()
  }

  return mode !== 'edit' ? renderTrueForm() : renderForm()
}

export default Form

export const FormInfo = {
  id: 'Form',
  name: 'Form',
  description: '表单容器',
  attr: {
    targetApi: '',
    name: 'basic',
    displayType: 'normal',
    eventType: 'none',
    componentName: null,
  },
  editor: [
    {
      attrName: 'name',
      label: '表单名称',
      type: 'String',
    },
    {
      attrName: 'targetApi',
      label: '提交表单地址',
      type: 'String',
    },
    {
      attrName: 'displayType',
      label: '显示模式',
      type: 'Enum',
      datasource: [{
        key: 'normal',
        name: '正常显示',
      },{
        key: 'modal',
        name: '弹框显示',
      }],
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
  ],
  children: [],
}