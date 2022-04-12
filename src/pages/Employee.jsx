import React from 'react';

import CrudModule from '@/modules/CrudModule';
import EmployeeForm from '@/forms/EmployeeForm';
import dayjs from 'dayjs';

export default function Employee() {
    const entity = 'UserGetList';
    const group = 'users';
    const searchConfig = {
        displayLabels: ['accountName', 'fullName'],
        searchFields: 'accountName,fullName,email',
        outputValue: 'id',
    };

    const entityDisplayLabels = ['accountName', 'surname'];

    const dataTableColumns = [
        {
            title: 'Người dùng',
            dataIndex: 'accountName',
        },
        {
            title: 'Họ và Tên',
            dataIndex: 'fullName'
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'birdOfDate',
            render: (date) => {
                return dayjs(date).format('DD/MM/YYYY');
            },
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
            title: 'Người dùng',
            dataIndex: 'accountName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Sinh nhật',
            dataIndex: 'birdOfDate',
            render: (date) => {
                return dayjs(date).format('DD/MM/YYYY');
            },
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            render: (gender) => {
                return gender === 0 ? "Name" : "Nữ";
            },
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
        }
    ];

    const ADD_NEW_ENTITY = 'Thêm mới';
    const DATATABLE_TITLE = 'Danh sách nhân viên';
    const ENTITY_NAME = 'Nhân viên';
    const CREATE_ENTITY = 'Thên mới nhân viên';
    const UPDATE_ENTITY = 'Cập nhật thông tin';
    const PANEL_TITLE = 'Quản lý nhân viên';

    const config = {
        entity,
        group,
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
            createForm={<EmployeeForm/>}
            updateForm={<EmployeeForm isUpdateForm={true}/>}
            config={config}
        />
    );
}
