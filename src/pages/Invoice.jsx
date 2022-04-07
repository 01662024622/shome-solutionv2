import React from 'react';
import dayjs from 'dayjs';
import { Tag } from 'antd';
import InvoiceModule from '@/modules/InvoiceModule';
import { useMoney } from '@/settings';

export default function Invoice() {
  const { moneyRowFormatter } = useMoney();

  const entity = 'invoice';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'name,surname,birthday',
  };
  const entityDisplayLabels = ['number', 'client.company'];
  const dataTableColumns = [
    {
      title: '#N',
      dataIndex: 'number',
    },
    {
      title: 'Khách hàng',
      dataIndex: ['client', 'company'],
    },
    {
      title: 'Ngày',
      dataIndex: 'date',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: 'Hạn',
      dataIndex: 'expiredDate',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: 'Tổng',
      dataIndex: 'total',
      render: (amount) => moneyRowFormatter({ amount }),
    },
    {
      title: 'Thanh toán',
      dataIndex: 'credit',
      render: (amount) => moneyRowFormatter({ amount }),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (status) => {
        let color = status === 'draft' ? 'cyan' : status === 'sent' ? 'magenta' : 'gold';

        return <Tag color={color}>{status && status.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Tiến độ',
      dataIndex: 'paymentStatus',
      render: (paymentStatus) => {
        let color =
          paymentStatus === 'unpaid'
            ? 'volcano'
            : paymentStatus === 'paid'
            ? 'green'
            : paymentStatus === 'overdue'
            ? 'red'
            : 'purple';

        return <Tag color={color}>{paymentStatus && paymentStatus.toUpperCase()}</Tag>;
      },
    },
  ];

  const PANEL_TITLE = 'Hóa đơn';
  const dataTableTitle = 'Danh mục hóa đơn';
  const ADD_NEW_ENTITY = 'Thêm mới';
  const DATATABLE_TITLE = 'Danh sách hóa đơn';
  const ENTITY_NAME = 'invoice';
  const CREATE_ENTITY = 'Thêm mới';
  const UPDATE_ENTITY = 'Cập nhật';

  const config = {
    entity,
    PANEL_TITLE,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return <InvoiceModule config={config} />;
}
