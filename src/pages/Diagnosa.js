import React from "react";
import { Button, Form, Input, Table } from 'antd';
import { getDataDiagnosaService } from "../redux/services/diagnosaService";
import { useDispatch, useSelector } from "react-redux";
import { regexNumberOnly } from "../utils/helper";


const DiagnosaPage = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.diagnosa)
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(getDataDiagnosaService(values.keyword, values.start, values.limit))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const columns = [
        {
            title: 'kdDiag',
            dataIndex: 'kdDiag',
            key: 'kdDiag',
        },
        {
            title: 'nmDiag',
            dataIndex: 'nmDiag',
            key: 'nmDiag',
        },
        {
            title: 'nonSpesialis',
            dataIndex: 'nonSpesialis',
            key: 'nonSpesialis',
            render: (value) => <p>{value ? 'true' : 'false'}</p>
        },
    ];

    return (
        <>
            <h1 className="text-3xl">
                Diagnosa Page
            </h1>
            <div className="w-1/2 flex flex-col gap-2">
                <Form
                    name="diagnosa"
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
                        label="Keyword"
                        name="keyword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input keyword!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

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
                <Table columns={columns} dataSource={data?.data?.list} loading={loading} rowKey='kdDiag' />
            </div>
        </>)
}

export default DiagnosaPage