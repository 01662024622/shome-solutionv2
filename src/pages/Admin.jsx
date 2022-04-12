import React from 'react';

import AdminCrudModule from '@/modules/AdminCrudModule';
import AdminForm from '@/forms/AdminForm';

export default function Admin() {
  const entity = 'admin';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'email,name,surname',
    outputValue: 'id',
  };

  const PANEL_TITLE = 'Quản lý Admin';
  const dataTableTitle = 'Danh mục Admin';
  const entityDisplayLabels = ['email'];

  const readColumns = [
    { title: 'Tên', dataIndex: 'name' },
    { title: 'Họ', dataIndex: 'surname' },
    { title: 'Email', dataIndex: 'email' },
    { title: "Quyeền", dataIndex: 'role.displayName' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Surname', dataIndex: 'surname' },
    { title: 'Email', dataIndex: 'email' },
    { title: "Role d'utilisateur", dataIndex: 'role.displayName' },
  ];

  const dataTableColumns = [

    { title: 'Tên', dataIndex: 'name' },
    { title: 'Họ', dataIndex: 'surname' },
    { title: 'Email', dataIndex: 'email' },
    { title: "Quyền", dataIndex:  ['role', 'displayName']},
  ];
  const ADD_NEW_ENTITY = 'Thêm mới';
  const DATATABLE_TITLE = 'Danh mục Admin';
  const ENTITY_NAME = 'admin';
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
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<AdminForm isUpdateForm={true} />}
      config={config}
    />
  );
}
