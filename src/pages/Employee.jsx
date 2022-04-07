import React from 'react';

import CrudModule from '@/modules/CrudModule';
import EmployeeForm from '@/forms/EmployeeForm';
import dayjs from 'dayjs';
export default function Employee() {
  const entity = 'employee';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'name,surname,birthday',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['name', 'surname'];

  const dataTableColumns = [
    {
      title: 'Người dùng',
      dataIndex: 'accountName',
    },
    {
      title: 'Họ và Tên',
      dataIndex: 'fullName',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'birdOfDate',
    },
    // {
    //   title: 'Vị trí',
    //   dataIndex: 'position',
    // },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  const readColumns = [
    {
      title: 'accountName',
      dataIndex: 'accountName',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'birdOfDate',
      dataIndex: 'birdOfDate',
      isDate: true,
    },
    {
      title: 'phoneNumber',
      dataIndex: 'birthplace',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
    {
      title: 'department',
      dataIndex: 'department',
    },
    {
      title: 'position',
      dataIndex: 'position',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'state',
      dataIndex: 'state',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
  ];

  const ADD_NEW_ENTITY = 'Thêm mới';
  const DATATABLE_TITLE = 'Danh sách nhân viên';
  const ENTITY_NAME = 'Nhân viên';
  const CREATE_ENTITY = 'Thên mới nhân viên';
  const UPDATE_ENTITY = 'Cập nhật thông tin';
  const PANEL_TITLE = 'Quản lý nhân viên';

  const config = {
    entity,
    PANEL_TITLE,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<EmployeeForm />}
      updateForm={<EmployeeForm isUpdateForm={true} />}
      config={config}
    />
  );
}
