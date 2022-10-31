import React from "react";
import { Button, Form, Input, Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getDataDokterService } from "../redux/services/dokterService";
import { regexNumberOnly } from "../utils/helper";

const DokterPage = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.dokter)
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(getDataDokterService(values.start, values.limit))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const columns = [
        {
            title: 'kdDokter',
            dataIndex: 'kdDokter',
            key: 'kdDokter',
        },
        {
            title: 'nmDokter',
            dataIndex: 'nmDokter',
            key: 'nmDokter',
        },
    ];
    return (
        <>
            <h1 className="text-3xl">
                Dokter Page
            </h1>
            <div className="w-1/2 flex flex-col gap-2">
                <Form
                    name="dokter"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Start"
                        name="start"
                        rules={[
                            {
                                required: true,
                                message: 'Please input start number!',
                            },
                            {
                                validator(_, value) {
                                    if (regexNumberOnly.test(value)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Input start tidak valid!'));
                                }
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Limit"
                        name="limit"
                        rules={[
                            {
                                required: true,
                                message: 'Please input limit number!',
                            },
                            {
                                validator(_, value) {
                                    if (regexNumberOnly.test(value)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Input limit tidak valid!'));
                                }
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 17,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <Table columns={columns} dataSource={data?.data?.list} loading={loading} rowKey='kdDokter' />
            </div>
        </>)
}

export default DokterPage