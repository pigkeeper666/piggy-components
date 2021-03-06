import React, { useState, useEffect } from 'react'
import request from '../request'
import ReactECharts from 'echarts-for-react';
import { message } from 'antd'
// import 'antd/dist/antd.css'

const originOptions = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: 'category',
    // boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      areaStyle: {}
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
};

const LineChart = (props: any) => {
  const { targetApi, isSmooth, isFull, isXShow, isYShow, ...otherProps } = props
  const [ config, setConfig ] = useState<any>(originOptions)
  const [ loading, setLoading ] = useState<any>(false)

  useEffect(() => {
    if (targetApi) {
      setLoading(true)
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
                boundaryGap: false,
                data: xData,
                splitLine: {show: isXShow},
                axisTick: {show: isXShow},
                axisLine: {show: isXShow},
                axisLabel: {show: isXShow}
              },
              yAxis: {
                boundaryGap : [ '0.5', '0.5' ],
                type: 'value',
                splitLine: {show: isYShow},
                axisTick: {show: isYShow},
                axisLine: {show: isYShow},
                axisLabel: {show: isYShow}
              },
              series: [
                {
                  data: yData,
                  type: 'line',
                  smooth: isSmooth,
                  areaStyle: isFull,
                },
              ],
              tooltip: {
                trigger: 'axis',
              },
            })
          }
        })
        .catch(() => message.error('?????????'))
        .finally(() => setLoading(false))
    }
  }, [targetApi, isSmooth, isFull, isXShow, isYShow])

  return (
    <div {...otherProps}>
      <ReactECharts option={config} showLoading={loading}/>
    </div>
  )
}

export default LineChart

export const LineChartInfo =   {
  id: 'LineChart',
  name: 'LineChart',
  description: '?????????',
  attr: {
    targetApi: '',
    isSmooth: true,
    isFull: true,
    isXShow: true,
    isYShow: false,
  },
  editor: [
    {
      attrName: 'targetApi',
      label: '????????????',
      type: 'String',
    },
    {
      attrName: 'isSmooth',
      label: '????????????',
      type: 'Bool',
    },
    {
      attrName: 'isFull',
      label: '????????????',
      type: 'Bool',
    },
    {
      attrName: 'isXShow',
      label: '????????????X??????????????????',
      type: 'Bool',
    },
    {
      attrName: 'isYShow',
      label: '????????????Y??????????????????',
      type: 'Bool',
    },
  ],
}