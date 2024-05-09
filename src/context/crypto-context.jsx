import { createContext, useContext, useEffect, useState } from 'react';
import { fakeFetchCryptoData, fetchCryptoAssets } from '../utils/api.js';
import { percentDiff } from '../utils/percentDiff.js';

const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false
});

export function CryptoContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [crypto, setCrypto] = useState([]);
    const [assets, setAssets] = useState([]);

    function mapAssets(assets, result) {
        return assets.map(asset => {
            const coin = result.find(c => c.id === asset.id);
            return {
                grow: asset.price < coin.price,
                growPercent: percentDiff(asset.price, coin.price),
                totalAmount: asset.amount * coin.price,
                totalProfit: (asset.amount * coin.price - asset.amount * asset.price).toFixed(2),
                ...asset
            }
        });
    }

    useEffect(() => {
        async function preload() {
            setLoading(true);

            const { result } = await fakeFetchCryptoData();
            const assets = await fetchCryptoAssets();

            setCrypto(result);
            setAssets(mapAssets(assets, result));

            setLoading(false);
        }

        preload();
    }, []);

    function addAsset(newAsset) {
        setAssets(prev => mapAssets([...prev, newAsset], crypto));
    }

    return <CryptoContext.Provider value={{ loading, crypto, assets, addAsset }}>{ children }</CryptoContext.Provider>
};

export default CryptoContext;

export function useCrypto() {
    return useContext(CryptoContext);
}