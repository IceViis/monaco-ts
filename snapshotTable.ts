import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  fileName: string;
  lineNumber: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'File Name',
    dataIndex: 'fileName',
  },
  {
    title: 'Line number',
    dataIndex: 'lineNumber',
  },
];

const data: DataType[] = [
  {
    key: '1',
    fileName: 'ServiceManager.java',
    lineNumber: 32,
  },
  {
    key: '2',
    fileName: 'AppLoader.java',
    lineNumber: 42,
  },
  {
    key: '3',
    fileName: 'RoutesHandlerFactory.java',
    lineNumber: 32,
  },
];

const SnapshotsTable: React.FC = () => (
  <div>
    <Table columns={columns} dataSource={data} size="small" />
  </div>
);

export default SnapshotsTable;
