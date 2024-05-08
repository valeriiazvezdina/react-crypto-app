import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import AppSider from './components/AppSider';

export default function App() {
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
