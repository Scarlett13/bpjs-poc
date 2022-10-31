import React, { useEffect } from "react";
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getDataKesadaranService } from "../redux/services/kesadaranService";

const KesadaranPage = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.kesadaran);
    const columns = [
        {
            title: 'kdSadar',
            dataIndex: 'kdSadar',
            key: 'kdSadar',
        },
        {
            title: 'nmSadar',
            dataIndex: 'nmSadar',
            key: 'nmSadar',
        },
    ];

    useEffect(() => {
        dispatch(getDataKesadaranService())
    }, [dispatch])

    return (<>
        <h1 className="text-3xl">
            Kesadaran Page
        </h1>
        <Table columns={columns} dataSource={data?.data?.list} loading={loading} rowKey='kdSadar' />
    </>)
}

export default KesadaranPage