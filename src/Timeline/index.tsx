import React, { useEffect, useState } from 'react'
import request from '../request'
import 'antd/dist/antd.css'
import { Timeline as AntTimeline, message, Empty } from 'antd';

const Timeline = (props: any) => {

  const { targetApi, ...other } = props
  const [ loading, setLoading ] = useState<any>(false)
  const [data, setData] = useState([])

  useEffect(() => {
    request.get(targetApi)
      .then(res => {
        setData(res?.data || [])
      })
      .catch(() => message.error('出错了'))
      .finally(() => setLoading(false))
  }, [targetApi])

  return (
    <div {...other}>
      {data?.length !== 0 && (
        <AntTimeline>
          {data?.map((item:any) => (
            <AntTimeline.Item color={item?.color || 'blue'}>
              <p>{item?.content || '暂无'}</p>
          </AntTimeline.Item>
          ))}
        </AntTimeline>
      )}
      {!data?.length && (
        <Empty />
      )}
    </div>
  )
}

export default Timeline

export const  TimelineInfo = {
  id: 'Timeline',
  name: 'Timeline',
  description: '时间线',
  attr: {
    targetApi: '',
  },
  editor: [
    {
      attrName: 'targetApi',
      label: '请求地址',
      type: 'String',
    },
  ]
}