import { ContainerInfo } from './Container'
import { ButtonInfo } from './Button'
import { FormInfo } from './Form'
import { FormInputInfo } from './FormInput'
import { GridInfo } from './Grid'
import { TableInfo } from './Table'
import { TcolInfo } from './Tcol'
import { TextInfo } from './Text'
import { StatisticInfo } from './Statistic'
import { LineChartInfo } from './LineChart'
import { BarChartInfo } from './BarChart'
import { GaugeChartInfo } from './GaugeChart'
import { DoughnutChartInfo } from './DoughnutChart'
import { PageHeaderInfo } from './PageHeader'
import { FormSelectInfo } from './FormSelect'
import { FormSwitchInfo } from './FormSwitch'
import { TimelineInfo } from './Timeline'
import { CalendarInfo } from './Calendar'
import { AvatarInfo } from './Avatar'
import { v4 as uuidv4 } from 'uuid';


export const wholeComponentInfo: any = [
  {...ContainerInfo, id: uuidv4() },
  {...ButtonInfo, id: uuidv4() },
  {...FormInfo, id: uuidv4() },
  {...FormInputInfo, id: uuidv4() },
  {...GridInfo, id: uuidv4() },
  {...TableInfo, id: uuidv4() },
  {...TcolInfo, id: uuidv4() },
  {...TextInfo, id: uuidv4() },
  {...StatisticInfo, id: uuidv4() },
  {...LineChartInfo, id: uuidv4() },
  {...BarChartInfo, id: uuidv4() },
  {...GaugeChartInfo, id: uuidv4() },
  {...DoughnutChartInfo, id: uuidv4() },
  {...PageHeaderInfo, id: uuidv4() },
  {...FormSelectInfo, id: uuidv4() },
  {...FormSwitchInfo, id: uuidv4() },
  {...TimelineInfo, id: uuidv4() },
  {...CalendarInfo, id: uuidv4() },
  {...AvatarInfo, id: uuidv4() }
]
