import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/crypto-context.jsx';
import { useEffect, useState } from 'react';
import CoinInfoModal from '../CoinInfoModal.jsx';
import AddAssetForm from '../AddAssetForm.jsx';

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
    const [modal, setModal] = useState(false);
    const [coin, setCoin] = useState(null);
    const [drawer, setDrawer] = useState(false);

    const { crypto } = useCrypto();

    useEffect(() => {
        const keypress = (event) => {
            if (event.key === '/') setSelect(prev => !prev);
        }
        document.addEventListener('keypress', keypress);
        return () => document.removeEventListener('keypress', keypress);
    }, []);

    function handleSelect(value) {
        setCoin(crypto.find(c => c.id === value));
        setModal(true);
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
                        <img src={option.data.icon} style={{ width: 20 }} alt={option.data.label}>
                        </img>
                        {option.data.label}
                    </Space>
                )}
            />

            <Button type='primary' onClick={() => setDrawer(true)}>Add Asset</Button>

            <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
                <CoinInfoModal coin={coin} />
            </Modal>

            <Drawer
                width={600}
                title="Add Asset"
                onClose={() => setDrawer(false)}
                open={drawer}
                destroyOnClose
            >
                <AddAssetForm onClose={() => setDrawer(false)} />
            </Drawer>
        </Layout.Header>
    )
}