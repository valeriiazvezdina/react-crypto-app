// import sdk from '@api/coinstatsopenapi';
import { cryptoData, cryptoAssets } from '../data.js';

// const API_KEY = import.meta.env.API_KEY;

export function fakeFetchCryptoData() {
    return new Promise(res => {
        setTimeout(() => res(cryptoData), 1);
    })
}

export function fetchCryptoAssets() {
    return new Promise(res => {
        setTimeout(() => res(cryptoAssets), 1000);
    });
}