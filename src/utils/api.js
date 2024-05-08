import { cryptoData, cryptoAssets } from '../data.js';

export function fakeFetchCryptoData() {
    return new Promise(res => {
        setTimeout(() => res(cryptoData), 2000);
    })
}

export function fetchCryptoAssets() {
    return new Promise(res => {
        setTimeout(() => res(cryptoAssets), 2000);
    })
}