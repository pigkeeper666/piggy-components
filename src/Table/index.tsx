import React from 'react'
import { Table as AntTable, message, Button} from 'antd'
import { useState, useEffect } from 'react'
import eventEmitter from '../Event'
import request from '../request'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: `${i}olp`,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


const Table = (props: any) => {
  const { 
    tableName,
    nameAndField=[],
    targetApi,
    formName,
    deleteApi,
    needButtons,
    ...others
  } = props
  const [isloading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [datasource, setDatasource] = useState<any>([])

  const onSelectChange = (keys:any) => {
    setSelectedRowKeys(keys)
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;


  const formatColoums = () => (
    nameAndField?.map((item: any) => {
      return {
        title: item.title,
        key: item.key,
        dataIndex: item.dataIndex,
      }
    }) || []
  )

  const loadData = () => {
    setLoading(true)
    request.get(targetApi)
      .then(res => {
        setDatasource(Array.isArray(res?.data) ? res?.data : [])
      })
      .catch(() => message.error('出错了'))
      .finally(() => setLoading(false))
    
  }

  // 注册事件
  useEffect(() => {
    loadData()
    eventEmitter.on(`${tableName}-load-data`, loadData)
    return () => {
      eventEmitter.off(`${tableName}-load-data`, loadData)
    }
  }, [tableName, targetApi])


  const handleCreate = () => {
    eventEmitter.emit(`${formName}-set-visible`, {})
  }

  const handleDelete = () => {
    setDeleteLoading(true)
    request.post(deleteApi, {keys: selectedRowKeys})
      .then(res => {
        message.success('已删除')
        loadData()
      })
      .catch(() => message.error('出错了'))
      .finally(() => setDeleteLoading(false))
  }
 
  return (
    <div {...others}>
      <AntTable
        rowSelection={rowSelection}
        title={() => needButtons && (
            <span>
              <Button
                type="primary"
                style={{ marginRight: 8 }}
                onClick={handleCreate}
              >
                创建
              </Button>
              <Button
                danger
                disabled={!hasSelected}
                onClick={handleDelete}
                loading={deleteLoading}
              >
                删除
              </Button>
            </span>
          )
        }
        loading={isloading}
        dataSource={datasource}
        columns={formatColoums()}
      />
    </div>
  )
}

export default Table

export const TableInfo =   {
  id: 'Table',
  name: 'Table',
  description: '表格',
  attr: {
    tableName: 'defaultTable',
    nameAndField: [],
    targetApi: '',
    deleteApi: '',
    formName: '',
    needButtons: true,
  },
  editor: [
    {
      attrName: 'tableName',
      label: '表格名称',
      type: 'String',
    },
    {
      attrName: 'nameAndField',
      label: '列名与字段值',
      type: 'Muti',
      keys: ['title', 'key', 'dataIndex']
    },
    {
      attrName: 'targetApi',
      label: '数据源地址',
      type: 'String',
    },
    {
      attrName: 'needButtons',
      label: '是否需要按钮',
      type: 'Bool',
    },
    {
      attrName: 'formName',
      label: '创建表单名称',
      type: 'String',
    },
    {
      attrName: 'deleteApi',
      label: '删除Api地址',
      type: 'String',
    },
  ]
}