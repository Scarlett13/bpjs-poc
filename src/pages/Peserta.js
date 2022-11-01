import { Collapse } from 'antd';
import React from 'react';
import { Button, Form, Input, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getDataPesertaNoKartuService, getDataPesertaJenisKartuService } from '../redux/services/pesertaService';
import { Select } from 'antd';
import { regexNumberOnly } from '../utils/helper';

const PesertaPage = () => {
    const dispatch = useDispatch()
    const { data, loading } = useSelector((state) => state.peserta)
    const { Panel } = Collapse;
    const onFinishNoKartu = (values) => {
        console.log('Success:', values);
        dispatch(getDataPesertaNoKartuService(values.keyword))
    };
    const onFinishFailedNoKartu = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinishJenisKartu = (values) => {
        console.log('Success:', values);
        dispatch(getDataPesertaJenisKartuService(values.jenis, values.keyword))
    };
    const onFinishFailedJenisKartu = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const columns = [
        {
            title: 'noKartu',
            dataIndex: 'noKartu',
            key: 'noKartu',
        },
        {
            title: 'nama',
            dataIndex: 'nama',
            key: 'nama',
        },
        {
            title: 'sex',
            dataIndex: 'sex',
            key: 'sex',
            render: (value) => <p>{value === 'p' ? 'Perempuan' : 'Laki-laki'}</p>
        },
        {
            title: 'tglLahir',
            dataIndex: 'tglLahir',
            key: 'tglLahir',
        },
        {
            title: 'tglMulaiAktif',
            dataIndex: 'tglMulaiAktif',
            key: 'tglMulaiAktif',
        },
        {
            title: 'tglAkhirBerlaku',
            dataIndex: 'tglAkhirBerlaku',
            key: 'tglAkhirBerlaku',
        },
    ];
    return (<div className='flex flex-col gap-2'>
        <h1 className="text-3xl">
            Peserta Page
        </h1>
        <Collapse accordion>
            <Panel header="Get Peserta by Nomor kartu" key="1">
                <Form
                    name="peserta-nomor-kartu"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onFinishNoKartu}
                    onFinishFailed={onFinishFailedNoKartu}
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
                            {
                                validator(_, value) {
                                    if (regexNumberOnly.test(value) && value.length === 13) {
                                        return Promise.resolve();
                                    } else if (value.length !== 13) {
                                        return Promise.reject(new Error('Nomor kartu harus 13 digit!'));
                                    }
                                    return Promise.reject(new Error('Input nomor kartu tidak valid!'));
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
            </Panel>
            <Panel header="Get Peserta by Jenis Kartu" key="2">
                <Form
                    name="peserta-jenis-kartu"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onFinishJenisKartu}
                    onFinishFailed={onFinishFailedJenisKartu}
                    autoComplete="off"
                >
                    <Form.Item label="Jenis Kartu" name='jenis'>
                        <Select defaultValue='Pilih Jenis Kartu'>
                            <Select.Option value="nik">NIK</Select.Option>
                            <Select.Option value="noka">Kartu BPJS</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Keyword"
                        name="keyword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input keyword!',
                            },
                            {
                                validator(_, value) {
                                    if (regexNumberOnly.test(value)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Input nomor kartu tidak valid!'));
                                }
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (getFieldValue('jenis') === 'nik' && value.length === 16) {
                                        return Promise.resolve();
                                    } else if (getFieldValue('jenis') === 'noka' && value.length === 13) {
                                        return Promise.resolve();
                                    } else if (getFieldValue('jenis') === 'nik' && value.length !== 16) {
                                        return Promise.reject(new Error('Input NIK harus 16 digit'));
                                    } else if (getFieldValue('jenis') === 'noka' && value.length !== 13) {
                                        return Promise.reject(new Error('Input nomor kartu harus 13 digit'));
                                    }
                                },
                            }),
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
            </Panel>
        </Collapse>
        <Table columns={columns} dataSource={data?.data?.list} loading={loading} rowKey='noKartu' />
    </div>
    )
}

export default PesertaPage