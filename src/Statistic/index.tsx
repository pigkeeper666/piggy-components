import React, { useState, useEffect } from 'react'
import { Statistic as AntStatistic, message} from 'antd'
import request from '../request'
// import 'antd/dist/antd.css'

const Statistic = (props: any) => {
  const { title, targetApi, field, ...otherProps } = props
  const [ value, setValue ] = useState<any>(null)
  const [ loading, setLoading ] = useState<any>(false)

  useEffect(() => {
    request.get(targetApi)
      .then(res => {
        setValue(res?.data || null)
      })
      .catch(() => message.error('出错了'))
      .finally(() => setLoading(false))
  }, [targetApi])

  return (
    <div {...otherProps}>
      <AntStatistic
        title={title}
        value={value?.[field] || '暂无'}
        loading={loading}
      />
    </div>
  )
}

export default Statistic

export const StatisticInfo =   {
  id: 'Statistic',
  name: 'Statistic',
  description: '数值展示',
  attr: {
    title: '默认标题',
    targetApi: '',
    field: '',
  },
  editor: [
    {
      attrName: 'title',
      label: '标题名称',
      type: 'String',
    },
    {
      attrName: 'targetApi',
      label: '请求地址',
      type: 'String',
    },
    {
      attrName: 'field',
      label: '字段名',
      type: 'String',
    }
  ],
}