import { cryptoData, cryptoAssets } from '../data.js';

export function fakeFetchCryptoData() {
    return new Promise(res => {
        setTimeout(() => res(cryptoData), 1);
    })
}

export function fetchCryptoAssets() {
    return new Promise(res => {
        setTimeout(() => res(cryptoAssets), 1);
    })
}