import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    getCoins(metadata?: types.GetCoinsMetadataParam): Promise<FetchResponse<200, types.GetCoinsResponse200>>;
    getCoinById(metadata: types.GetCoinByIdMetadataParam): Promise<FetchResponse<200, types.GetCoinByIdResponse200>>;
    getCoinChartById(metadata: types.GetCoinChartByIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    getCoinAvgPrice(metadata: types.GetCoinAvgPriceMetadataParam): Promise<FetchResponse<number, unknown>>;
    getCoinExchangePrice(metadata: types.GetCoinExchangePriceMetadataParam): Promise<FetchResponse<200, types.GetCoinExchangePriceResponse200>>;
    getTickerExchanges(): Promise<FetchResponse<200, types.GetTickerExchangesResponse200>>;
    getTickerMarkets(metadata?: types.GetTickerMarketsMetadataParam): Promise<FetchResponse<200, types.GetTickerMarketsResponse200>>;
    getBlockchains(): Promise<FetchResponse<200, types.GetBlockchainsResponse200>>;
    getWalletBalance(metadata: types.GetWalletBalanceMetadataParam): Promise<FetchResponse<200, types.GetWalletBalanceResponse200>>;
    getWalletSyncStatus(metadata: types.GetWalletSyncStatusMetadataParam): Promise<FetchResponse<200, types.GetWalletSyncStatusResponse200>>;
    getWalletTransactions(metadata: types.GetWalletTransactionsMetadataParam): Promise<FetchResponse<200, types.GetWalletTransactionsResponse200>>;
    transactionsSync(metadata: types.TransactionsSyncMetadataParam): Promise<FetchResponse<200, types.TransactionsSyncResponse200>>;
    getExchanges(): Promise<FetchResponse<200, types.GetExchangesResponse200>>;
    getExchangeBalance(body: types.GetExchangeBalanceBodyParam): Promise<FetchResponse<200, types.GetExchangeBalanceResponse200>>;
    getExchangeSyncStatus(metadata: types.GetExchangeSyncStatusMetadataParam): Promise<FetchResponse<200, types.GetExchangeSyncStatusResponse200>>;
    getExchangeTransactions(metadata: types.GetExchangeTransactionsMetadataParam): Promise<FetchResponse<200, types.GetExchangeTransactionsResponse200>>;
    getFiatCurrencies(): Promise<FetchResponse<200, types.GetFiatCurrenciesResponse200>>;
    getTrendingNfts(metadata?: types.GetTrendingNftsMetadataParam): Promise<FetchResponse<200, types.GetTrendingNftsResponse200>>;
    getNftsByWallet(metadata: types.GetNftsByWalletMetadataParam): Promise<FetchResponse<200, types.GetNftsByWalletResponse200>>;
    getNftCollectionByAddress(metadata: types.GetNftCollectionByAddressMetadataParam): Promise<FetchResponse<200, types.GetNftCollectionByAddressResponse200>>;
    getNftCollectionAssetsByAddress(metadata: types.GetNftCollectionAssetsByAddressMetadataParam): Promise<FetchResponse<200, types.GetNftCollectionAssetsByAddressResponse200>>;
    getNftCollectionAssetByTokenid(metadata: types.GetNftCollectionAssetByTokenidMetadataParam): Promise<FetchResponse<200, types.GetNftCollectionAssetByTokenidResponse200>>;
    getNewsSources(): Promise<FetchResponse<200, types.GetNewsSourcesResponse200>>;
    getNews(metadata?: types.GetNewsMetadataParam): Promise<FetchResponse<200, types.GetNewsResponse200>>;
    getNewsByType(metadata: types.GetNewsByTypeMetadataParam): Promise<FetchResponse<200, types.GetNewsByTypeResponse200>>;
    getNewsById(metadata: types.GetNewsByIdMetadataParam): Promise<FetchResponse<200, types.GetNewsByIdResponse200>>;
    getMarketCap(): Promise<FetchResponse<200, types.GetMarketCapResponse200>>;
    transactionPreview(metadata: types.TransactionPreviewMetadataParam): Promise<FetchResponse<200, types.TransactionPreviewResponse200>>;
    erc20BalancePreview(metadata: types.Erc20BalancePreviewMetadataParam): Promise<FetchResponse<200, types.Erc20BalancePreviewResponse200>>;
    ethereumBalancePreview(metadata: types.EthereumBalancePreviewMetadataParam): Promise<FetchResponse<200, types.EthereumBalancePreviewResponse200>>;
    allowanceChange(metadata: types.AllowanceChangeMetadataParam): Promise<FetchResponse<200, types.AllowanceChangeResponse200>>;
    nftChange(metadata: types.NftChangeMetadataParam): Promise<FetchResponse<200, types.NftChangeResponse200>>;
    getPortfolioCoins(metadata: types.GetPortfolioCoinsMetadataParam): Promise<FetchResponse<200, types.GetPortfolioCoinsResponse200>>;
    getPortfolioTransactions(metadata: types.GetPortfolioTransactionsMetadataParam): Promise<FetchResponse<200, types.GetPortfolioTransactionsResponse200>>;
    getCurrencies(): Promise<FetchResponse<200, types.GetCurrenciesResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
