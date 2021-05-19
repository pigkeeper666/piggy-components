import React, { useState, useEffect } from 'react'
import request from '../request'
import ReactECharts from 'echarts-for-react';
import { message } from 'antd'
// import 'antd/dist/antd.css'

const originOptions = {
  tooltip: {
      trigger: 'item'
  },
  legend: {
      top: '5%',
      left: 'center'
  },
  series: [
      {
          // name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
              show: false,
              position: 'center'
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '12',
                  fontWeight: 'bold'
              }
          },
          labelLine: {
              show: false
          },
          data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'}
          ]
      }
  ]
};

const DoughnutChart = (props: any) => {
  const { targetApi, emphasisFontSize = 12, ...otherProps } = props
  const [ config, setConfig ] = useState<any>(originOptions)
  const [ loading, setLoading ] = useState<any>(false)

  useEffect(() => {
    if (targetApi) {
      setLoading(true)
      request.get(targetApi)
        .then(res => {
          if (res?.data) {
            const d = res.data
            setConfig({
              tooltip: {
                trigger: 'item'
              },
              legend: {
                top: '5%',
                left: 'center'
              },
              series: [
                {
                  // name: '访问来源',
                  type: 'pie',
                  radius: ['40%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    label: {
                      show: true,
                      fontSize: emphasisFontSize,
                      fontWeight: 'bold'
                    }
                  },
                  labelLine: {
                    show: false
                  },
                  data: d,
                }
              ]
            })
          }
        })
        .catch(() => message.error('出错了'))
        .finally(() => setLoading(false))
    }
  }, [targetApi, emphasisFontSize])

  return (
    <div {...otherProps}>
      <ReactECharts option={config} showLoading={loading} {...otherProps}/>
    </div>
  )
}

export default DoughnutChart

export const DoughnutChartInfo =   {
  id: 'DoughnutChart',
  name: 'DoughnutChart',
  description: '环形图',
  attr: {
    targetApi: '',
    emphasisFontSize: '12',
  },
  editor: [
    {
      attrName: 'targetApi',
      label: '请求地址',
      type: 'String',
    },
    {
      attrName: 'emphasisFontSize',
      label: '强调字体大小',
      type: 'String',
    },
  ],
}