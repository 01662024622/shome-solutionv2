import React from 'react';
import dayjs from 'dayjs';
import { Tag } from 'antd';

import QuoteModule from '@/modules/QuoteModule';
import { useMoney } from '@/settings';

export default function Quote() {
  const { moneyRowFormatter } = useMoney();

  const entity = 'quote';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'name,surname,birthday',
  };
  const entityDisplayLabels = ['number', 'client.company'];
  const dataTableColumns = [
    {
      title: 'Số',
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
      title: 'Thành tiền',
      dataIndex: 'subTotal',
      render: (amount) => moneyRowFormatter({ amount }),
    },
    {
      title: 'Tổng',
      dataIndex: 'total',
      render: (amount) => moneyRowFormatter({ amount }),
    },

    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (status) => {
        let color =
          status === 'draft'
            ? 'cyan'
            : status === 'sent'
            ? 'blue'
            : status === 'accepted'
            ? 'green'
            : status === 'expired'
            ? 'orange'
            : 'red';
        return <Tag color={color}>{status && status.toUpperCase()}</Tag>;
      },
    },
  ];

  const PANEL_TITLE = 'Báo giá';
  const dataTableTitle = 'Danh mục báo giá';
  const ADD_NEW_ENTITY = 'Thêm mới';
  const DATATABLE_TITLE = 'Danh mục báo giá';
  const ENTITY_NAME = 'quote';
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
  return <QuoteModule config={config} />;
}
