import React, { useState, useEffect } from 'react'
import request from '../request'
import ReactECharts from 'echarts-for-react';
import { message } from 'antd'
// import 'antd/dist/antd.css'

const originOptions = {
  series: [{
      type: 'gauge',
      progress: {
          show: true,
          width: 18
      },
      axisLine: {
          lineStyle: {
              width: 18
          }
      },
      axisTick: {
          show: false
      },
      splitLine: {
          length: 15,
          lineStyle: {
              width: 2,
              color: '#999'
          }
      },
      axisLabel: {
          distance: 25,
          color: '#999',
          fontSize: 10
      },
      anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
              borderWidth: 10
          }
      },
      title: {
          show: false
      },
      detail: {
          valueAnimation: true,
          fontSize: 12,
          offsetCenter: [0, '70%']
      },
      data: [{
          value: 70
      }]
  }]
};

const GaugeChart = (props: any) => {
  const { targetApi, axisLabelFontSize = 10, detailFontSize = 12, ...otherProps } = props
  const [ config, setConfig ] = useState<any>(originOptions)
  const [ loading, setLoading ] = useState<any>(false)

  useEffect(() => {
    request.get(targetApi)
      .then(res => {
        if (res?.data) {
          const d = res.data
          setConfig({
            series: [{
                type: 'gauge',
                progress: {
                    show: true,
                    width: 18
                },
                axisLine: {
                    lineStyle: {
                        width: 18
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    length: 15,
                    lineStyle: {
                        width: 2,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: 25,
                    color: '#999',
                    fontSize: axisLabelFontSize,
                },
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 16,
                    itemStyle: {
                        borderWidth: 10
                    }
                },
                title: {
                    show: false
                },
                detail: {
                    valueAnimation: true,
                    fontSize: detailFontSize,
                    offsetCenter: [0, '70%']
                },
                data: d,
            }]
        })
        }
      })
      .catch(() => message.error('出错了'))
      .finally(() => setLoading(false))
  }, [targetApi, axisLabelFontSize, detailFontSize])

  return (
    <div {...otherProps}>
        <ReactECharts option={config} showLoading={loading} {...otherProps}/>
    </div>
  )
}

export default GaugeChart

export const GaugeChartInfo =   {
  id: 'GaugeChart',
  name: 'GaugeChart',
  description: '仪表盘',
  attr: {
    targetApi: '',
    axisLabelFontSize: 10,
    detailFontSize: 12
  },
  editor: [
    {
      attrName: 'targetApi',
      label: '请求地址',
      type: 'String',
    },
    {
      attrName: 'axisLabelFontSize',
      label: '刻度字体大小',
      type: 'String',
    },
    {
      attrName: 'detailFontSize',
      label: '当前选中字体大小',
      type: 'String',
    },
  ],
}