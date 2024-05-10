import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'coinstatsopenapi/1.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    getCoins(metadata) {
        return this.core.fetch('/coins', 'get', metadata);
    }
    getCoinById(metadata) {
        return this.core.fetch('/coins/{coinId}', 'get', metadata);
    }
    getCoinChartById(metadata) {
        return this.core.fetch('/coins/{coinId}/charts', 'get', metadata);
    }
    getCoinAvgPrice(metadata) {
        return this.core.fetch('/coins/price/avg', 'get', metadata);
    }
    getCoinExchangePrice(metadata) {
        return this.core.fetch('/coins/price/exchange', 'get', metadata);
    }
    getTickerExchanges() {
        return this.core.fetch('/tickers/exchanges', 'get');
    }
    getTickerMarkets(metadata) {
        return this.core.fetch('/tickers/markets', 'get', metadata);
    }
    getBlockchains() {
        return this.core.fetch('/wallet/blockchains', 'get');
    }
    getWalletBalance(metadata) {
        return this.core.fetch('/wallet/balance', 'get', metadata);
    }
    getWalletSyncStatus(metadata) {
        return this.core.fetch('/wallet/status', 'get', metadata);
    }
    getWalletTransactions(metadata) {
        return this.core.fetch('/wallet/transactions', 'get', metadata);
    }
    transactionsSync(metadata) {
        return this.core.fetch('/wallet/transactions', 'patch', metadata);
    }
    getExchanges() {
        return this.core.fetch('/exchange/support', 'get');
    }
    getExchangeBalance(body) {
        return this.core.fetch('/exchange/balance', 'post', body);
    }
    getExchangeSyncStatus(metadata) {
        return this.core.fetch('/exchange/status', 'get', metadata);
    }
    getExchangeTransactions(metadata) {
        return this.core.fetch('/exchange/transactions', 'get', metadata);
    }
    getFiatCurrencies() {
        return this.core.fetch('/fiats', 'get');
    }
    getTrendingNfts(metadata) {
        return this.core.fetch('/nft/trending', 'get', metadata);
    }
    getNftsByWallet(metadata) {
        return this.core.fetch('/nft/wallet/{address}/assets', 'get', metadata);
    }
    getNftCollectionByAddress(metadata) {
        return this.core.fetch('/nft/collection/{collectionAddress}', 'get', metadata);
    }
    getNftCollectionAssetsByAddress(metadata) {
        return this.core.fetch('/nft/{collectionAddress}/assets', 'get', metadata);
    }
    getNftCollectionAssetByTokenid(metadata) {
        return this.core.fetch('/nft/{collectionAddress}/asset/{tokenId}', 'get', metadata);
    }
    getNewsSources() {
        return this.core.fetch('/news/sources', 'get');
    }
    getNews(metadata) {
        return this.core.fetch('/news', 'get', metadata);
    }
    getNewsByType(metadata) {
        return this.core.fetch('/news/type/{type}', 'get', metadata);
    }
    getNewsById(metadata) {
        return this.core.fetch('/news/{id}', 'get', metadata);
    }
    getMarketCap() {
        return this.core.fetch('/markets', 'get');
    }
    transactionPreview(metadata) {
        return this.core.fetch('/transaction/preview', 'get', metadata);
    }
    erc20BalancePreview(metadata) {
        return this.core.fetch('/transaction/preview/erc20Change', 'get', metadata);
    }
    ethereumBalancePreview(metadata) {
        return this.core.fetch('/transaction/preview/ethChange', 'get', metadata);
    }
    allowanceChange(metadata) {
        return this.core.fetch('/transaction/preview/allowanceChange', 'get', metadata);
    }
    nftChange(metadata) {
        return this.core.fetch('/transaction/preview/nftChange', 'get', metadata);
    }
    getPortfolioCoins(metadata) {
        return this.core.fetch('/portfolio/coins', 'get', metadata);
    }
    getPortfolioTransactions(metadata) {
        return this.core.fetch('/portfolio/transactions', 'get', metadata);
    }
    getCurrencies() {
        return this.core.fetch('/currencies', 'get');
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
