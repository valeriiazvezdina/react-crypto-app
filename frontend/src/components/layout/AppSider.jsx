import { Layout, Card, Statistic, List, Typography, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { capitalize } from '../../utils/capitalize.js';
import { useCrypto } from '../../context/crypto-context.jsx';

const siderStyle = {
    padding: '1rem'
};

export default function AppSider() {
    const { assets } = useCrypto();

    function handleEdit(values) {
        console.log(values)
    }

    function handleDelete(values) {
        console.log(values)
    }

    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map(asset => (
                <Card
                    key={asset.id}
                    style={{ marginBottom: '1rem' }}
                    actions={[
                        <EditOutlined key="edit" onClick={handleEdit} />,
                        <DeleteOutlined key="delete" onClick={handleDelete} />,
                    ]}
                >
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{
                            color: asset.grow ? '#3f8600' : '#cf1322',
                        }}
                        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="$"
                    />
                    <List
                        size='small'
                        dataSource={[
                            { title: 'Total profit', value: asset.totalProfit, withTag: true },
                            { title: 'Asset amout', value: asset.amount, isPlain: true },
                        ]}
                        renderItem={(item) => (
                            <List.Item key={item.title}>
                                <span>{item.title}</span>
                                <span>
                                    {item.withTag &&
                                        (<Tag color={asset.grow ? 'green' : 'red'}>
                                            {asset.growPercent}%
                                        </Tag>)}
                                    {item.isPlain && item.value}
                                    {!item.isPlain && <Typography.Text type={asset.grow ? 'success' : 'danger'}>{item.value}</Typography.Text>}
                                </span>
                            </List.Item>
                        )}
                    />
                </Card>
            ))}
        </Layout.Sider>
    )
}

