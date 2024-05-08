import { Layout, Select, Space, Button } from 'antd';
import { useCrypto } from '../../context/crypto-context.jsx';
import { useEffect, useState } from 'react';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

export default function AppHeader() {
    const [select, setSelect] = useState(false);
    const { crypto } = useCrypto();

    useEffect(() => {
        const keypress = (event) => {
            if (event.key === '/') setSelect(prev => !prev);
        }
        document.addEventListener('keypress', keypress);
        return () => document.removeEventListener('keypress', keypress);
    }, []);

    function handleSelect(value) {
        console.log(value)
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: 250,
                }}
                value='press / to open'
                optionLabelProp='label'
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon
                }))}
                open={select}
                onClick={() => setSelect(prev => !prev)}
                onSelect={handleSelect}
                optionRender={(option) => (
                    <Space>
                        <img src={option.data.icon} style={{width: 20}} alt={option.data.label}>
                        </img>
                        {option.data.label}
                    </Space>
                )}
            />
            <Button type='primary'>Add Asset</Button>
        </Layout.Header>
    )
}