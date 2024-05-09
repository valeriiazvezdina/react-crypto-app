import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader.jsx';
import AppContent from './AppContent.jsx';
import AppSider from './AppSider.jsx';
import { useContext } from 'react';
import { useCrypto } from '../../context/crypto-context.jsx';

export default function AppLayout() {
    const { loading } = useCrypto();

    if (loading) {
        return <Spin fullscreen />;
    }

    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
        </Layout>
    )
}