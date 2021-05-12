import React, { useEffect, useState } from 'react'
import request from '../request'
import 'antd/dist/antd.css'
import { Calendar as AntCalendar, message } from 'antd';

const Calendar = (props: any) => {

  const { targetApi, width, ...other } = props

  const cls = {
    width: width,
    border: '1px solid #f0f0f0',
    borderRadius: 2
  }

  return (
    <div {...other}>
      <AntCalendar fullscreen={false} style={cls}/>
    </div>
  )
}

export default Calendar

export const  CalendarInfo = {
  id: 'Calendar',
  name: 'Calendar',
  description: '日历',
  attr: {
    width: '300px',
  },
  editor: [
    {
      attrName: 'width',
      label: '宽度',
      type: 'String',
    },
  ]
}