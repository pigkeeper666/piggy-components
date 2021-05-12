import React, { useState, useEffect } from 'react'
import request from '../request'
import ReactECharts from 'echarts-for-react';
import { message } from 'antd'
// import 'antd/dist/antd.css'

const originOptions = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'bar',
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
};

const BarChart = (props: any) => {
  const { targetApi, isXShow, isYShow, ...otherProps } = props
  const [ config, setConfig ] = useState<any>(originOptions)
  const [ loading, setLoading ] = useState<any>(false)

  useEffect(() => {
    request.get(targetApi)
      .then(res => {
        if (res?.data) {
          const d = res.data
          const xData = Object.keys(d)
          const yData: any = []
          xData.forEach(key => yData.push(d[key]))
          setConfig({
            grid: { top: 8, right: 8, bottom: 24, left: 36 },
            xAxis: {
              type: 'category',
              data: xData,
              splitLine: {show: isXShow},
              axisTick: {show: isXShow},
              axisLine: {show: isXShow},
              axisLabel: {show: isXShow},
            },
            yAxis: {
              type: 'value',
              splitLine: {show: isYShow},
              axisTick: {show: isYShow},
              axisLine: {show: isYShow},
              axisLabel: {show: isYShow}
            },
            series: [
              {
                data: yData,
                type: 'bar',
              },
            ],
            tooltip: {
              trigger: 'axis',
            },
          })
        }
      })
      .catch(() => message.error('出错了'))
      .finally(() => setLoading(false))
  }, [targetApi, isXShow, isYShow])

  return (
    <div {...otherProps}>
      <ReactECharts option={config} showLoading={loading} {...otherProps}/>
    </div>
  )
}

export default BarChart

export const BarChartInfo =   {
  id: 'BarChart',
  name: 'BarChart',
  description: '柱状图',
  attr: {
    targetApi: '',
    isXShow: true,
    isYShow: false,
  },
  editor: [
    {
      attrName: 'targetApi',
      label: '请求地址',
      type: 'String',
    },
    {
      attrName: 'isXShow',
      label: '是否显示X轴网格线坐标',
      type: 'Bool',
    },
    {
      attrName: 'isYShow',
      label: '是否显示Y轴网格线坐标',
      type: 'Bool',
    },
  ],
}