import { Layout, Card, Statistic, List, Typography, Spin, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { fakeFetchCryptoData, fetchCryptoAssets } from '../utils/api.js';
import { percentDiff } from '../utils/percentDiff.js';
import { capitalize } from '../utils/capitalize.js';

const siderStyle = {
    padding: '1rem'
};

export default function AppSider() {
    const [loading, setLoading] = useState(false);
    const [crypto, setCrypto] = useState([]);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        async function preload() {
            setLoading(true);

            const { result } = await fakeFetchCryptoData();
            const assets = await fetchCryptoAssets();

            setCrypto(result);
            setAssets(assets.map(asset => {
                const coin = result.find(c => c.id === asset.id);
                return {
                    grow: asset.price < coin.price,
                    growPercent: percentDiff(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: (asset.amount * coin.price - asset.amount * asset.price).toFixed(2),
                    ...asset
                }
            }));

            setLoading(false);
        }

        preload();
    }, []);

    if (loading) {
        return <Spin fullscreen />;
    }

    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map(asset => (
                <Card key={asset.id} style={{ marginBottom: '1rem' }}>
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

