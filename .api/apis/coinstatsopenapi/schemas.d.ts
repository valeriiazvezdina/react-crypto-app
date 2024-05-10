declare const AllowanceChange: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly examples: readonly ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1111111254fb6c44bac0bed2854e76f90643097d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly data: {
                    readonly default: "0x";
                    readonly type: "string";
                    readonly examples: readonly ["0x"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x5208"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gasPrice: {
                    readonly type: "string";
                    readonly examples: readonly ["0x65bcb2480"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly value: {
                    readonly default: "0x0";
                    readonly type: "string";
                    readonly examples: readonly ["0x9184e72a000"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x47c86fb27"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxPriorityFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x2faf080"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["from", "to"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly allowanceChange: {
                    readonly type: "object";
                    readonly properties: {
                        readonly erc20: {
                            readonly type: "object";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly from: {
                                            readonly type: "string";
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                        readonly erc721: {
                            readonly type: "object";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly from: {
                                            readonly type: "boolean";
                                        };
                                        readonly to: {
                                            readonly type: "boolean";
                                        };
                                    };
                                };
                            };
                        };
                        readonly approveForAll: {
                            readonly type: "object";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly from: {
                                            readonly type: "boolean";
                                        };
                                        readonly to: {
                                            readonly type: "boolean";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly required: readonly ["erc20", "erc721", "approveForAll"];
                };
            };
            readonly required: readonly ["allowanceChange"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Erc20BalancePreview: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly examples: readonly ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1111111254fb6c44bac0bed2854e76f90643097d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly data: {
                    readonly default: "0x";
                    readonly type: "string";
                    readonly examples: readonly ["0x"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x5208"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gasPrice: {
                    readonly type: "string";
                    readonly examples: readonly ["0x65bcb2480"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly value: {
                    readonly default: "0x0";
                    readonly type: "string";
                    readonly examples: readonly ["0x9184e72a000"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x47c86fb27"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxPriorityFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x2faf080"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["from", "to"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly tokenChange: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contractAddress: {
                            readonly type: "object";
                            readonly properties: {
                                readonly from: {
                                    readonly type: "string";
                                };
                                readonly to: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
            };
            readonly required: readonly ["tokenChange"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const EthereumBalancePreview: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly examples: readonly ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1111111254fb6c44bac0bed2854e76f90643097d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly data: {
                    readonly default: "0x";
                    readonly type: "string";
                    readonly examples: readonly ["0x"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x5208"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gasPrice: {
                    readonly type: "string";
                    readonly examples: readonly ["0x65bcb2480"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly value: {
                    readonly default: "0x0";
                    readonly type: "string";
                    readonly examples: readonly ["0x9184e72a000"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x47c86fb27"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxPriorityFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x2faf080"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["from", "to"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ethChange: {
                    readonly type: "object";
                    readonly properties: {
                        readonly from: {
                            readonly type: "string";
                            readonly examples: readonly ["0x7436fd77bfd012"];
                        };
                        readonly to: {
                            readonly type: "string";
                            readonly examples: readonly ["0x6f32939da5dbd5"];
                        };
                    };
                    readonly required: readonly ["from", "to"];
                };
            };
            readonly required: readonly ["ethChange"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBlockchains: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly connectionId: {
                        readonly type: "string";
                    };
                    readonly chain: {
                        readonly type: "string";
                    };
                    readonly icon: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["name", "connectionId", "chain", "icon"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCoinAvgPrice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly coinId: {
                    readonly type: "string";
                    readonly examples: readonly ["bitcoin"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timestamp: {
                    readonly type: "number";
                    readonly examples: readonly [1636315200];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["coinId", "timestamp"];
        }];
    };
};
declare const GetCoinById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly coinId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of coin, which you received from /coins call response.";
                };
            };
            readonly required: readonly ["coinId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly icon: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly symbol: {
                    readonly type: "string";
                };
                readonly rank: {
                    readonly type: "number";
                };
                readonly price: {
                    readonly type: "number";
                };
                readonly priceBtc: {
                    readonly type: "number";
                };
                readonly volume: {
                    readonly type: "number";
                };
                readonly marketCap: {
                    readonly type: "number";
                };
                readonly availableSupply: {
                    readonly type: "number";
                };
                readonly totalSupply: {
                    readonly type: "number";
                };
                readonly priceChange1h: {
                    readonly type: "number";
                };
                readonly priceChange1d: {
                    readonly type: "number";
                };
                readonly priceChange1w: {
                    readonly type: "number";
                };
                readonly websiteUrl: {
                    readonly type: "string";
                };
                readonly redditUrl: {
                    readonly type: "string";
                };
                readonly twitterUrl: {
                    readonly type: "string";
                };
                readonly contractAddress: {
                    readonly type: "string";
                };
                readonly decimals: {
                    readonly type: "number";
                };
                readonly explorers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
            };
            readonly required: readonly ["id", "icon", "name", "symbol", "rank", "price", "priceBtc", "volume", "marketCap", "availableSupply", "totalSupply", "priceChange1h", "priceChange1d", "priceChange1w", "websiteUrl", "redditUrl", "twitterUrl", "explorers"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCoinChartById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly coinId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of coin, which you received from /coins call response.";
                };
            };
            readonly required: readonly ["coinId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly period: {
                    readonly enum: readonly ["all", "24h", "1w", "1m", "3m", "6m", "1y"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["period"];
        }];
    };
};
declare const GetCoinExchangePrice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly exchange: {
                    readonly type: "string";
                    readonly examples: readonly ["Binance"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from: {
                    readonly type: "string";
                    readonly examples: readonly ["BTC"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly examples: readonly ["ETH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timestamp: {
                    readonly type: "number";
                    readonly examples: readonly [1636315200];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["exchange", "from", "to", "timestamp"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly price: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["price"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCoins: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly blockchain: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly examples: readonly [40];
                        };
                        readonly itemCount: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly pageCount: {
                            readonly type: "number";
                            readonly examples: readonly [3];
                        };
                        readonly hasPreviousPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly hasNextPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                    readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                };
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly icon: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly symbol: {
                                readonly type: "string";
                            };
                            readonly rank: {
                                readonly type: "number";
                            };
                            readonly price: {
                                readonly type: "number";
                            };
                            readonly priceBtc: {
                                readonly type: "number";
                            };
                            readonly volume: {
                                readonly type: "number";
                            };
                            readonly marketCap: {
                                readonly type: "number";
                            };
                            readonly availableSupply: {
                                readonly type: "number";
                            };
                            readonly totalSupply: {
                                readonly type: "number";
                            };
                            readonly priceChange1h: {
                                readonly type: "number";
                            };
                            readonly priceChange1d: {
                                readonly type: "number";
                            };
                            readonly priceChange1w: {
                                readonly type: "number";
                            };
                            readonly websiteUrl: {
                                readonly type: "string";
                            };
                            readonly redditUrl: {
                                readonly type: "string";
                            };
                            readonly twitterUrl: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly decimals: {
                                readonly type: "number";
                            };
                            readonly explorers: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly required: readonly ["id", "icon", "name", "symbol", "rank", "price", "priceBtc", "volume", "marketCap", "availableSupply", "totalSupply", "priceChange1h", "priceChange1d", "priceChange1w", "websiteUrl", "redditUrl", "twitterUrl", "explorers"];
                    };
                };
            };
            readonly required: readonly ["meta", "result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCurrencies: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly required: readonly ["result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangeBalance: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly connectionFields: {
                readonly type: "object";
                readonly description: "The credentials given from exchange. key, secret etc.";
                readonly additionalProperties: true;
            };
            readonly connectionId: {
                readonly type: "string";
                readonly description: "The exchange connection id";
                readonly examples: readonly ["binance"];
            };
        };
        readonly required: readonly ["connectionFields", "connectionId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly balances: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly coinId: {
                                readonly type: "string";
                            };
                            readonly amount: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["coinId", "amount"];
                    };
                };
                readonly portfolio: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly type: "string";
                        };
                        readonly connectionId: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["id", "status", "connectionId"];
                };
            };
            readonly required: readonly ["balances", "portfolio"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangeSyncStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly portfolioId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of portfolio, which you received from /exchange/balance call response.";
                };
            };
            readonly required: readonly ["portfolioId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["syncing", "synced"];
                    readonly description: "`syncing` `synced`";
                };
            };
            readonly required: readonly ["status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangeTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2024-04-27T11:09:08.155Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly to: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2024-04-28T13:09:08.155Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly types: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma separated values of (deposit,withdraw,approve,executed,balance,fee)";
                };
                readonly portfolioId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of portfolio, which you received from /exchange/balance response.";
                };
            };
            readonly required: readonly ["portfolioId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                        };
                        readonly limit: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["page", "limit"];
                };
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["deposit", "withdraw", "approve", "executed", "balance", "fee"];
                                readonly description: "`deposit` `withdraw` `approve` `executed` `balance` `fee`";
                            };
                            readonly date: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly mainContent: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly coinIcons: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly coinAssets: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly required: readonly ["coinIcons", "coinAssets"];
                            };
                            readonly coinData: {
                                readonly description: "Only sent if there is at least 1 coin in transactions";
                                readonly type: "object";
                                readonly required: readonly ["count", "symbol", "currentValue"];
                                readonly properties: {
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly profitLoss: {
                                readonly description: "Only sent if there is at least 1 coin in transactions";
                                readonly type: "object";
                                readonly required: readonly ["profit", "profitPercent"];
                                readonly properties: {
                                    readonly profit: {
                                        readonly type: "number";
                                    };
                                    readonly profitPercent: {
                                        readonly type: "number";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly transactions: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly action: {
                                            readonly type: "string";
                                        };
                                        readonly items: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly required: readonly ["action", "items"];
                                };
                            };
                            readonly fee: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "Sent only when fee is another transaction object";
                                    };
                                    readonly coin: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly icon: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["id", "name", "symbol", "icon"];
                                    };
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly totalWorth: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["coin", "count", "totalWorth"];
                            };
                            readonly hash: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly explorerUrl: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "explorerUrl"];
                            };
                        };
                        readonly required: readonly ["type", "date", "mainContent", "transactions"];
                    };
                };
            };
            readonly required: readonly ["meta", "result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchanges: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly connectionId: {
                        readonly type: "string";
                    };
                    readonly icon: {
                        readonly type: "string";
                    };
                    readonly connectionFields: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly required: readonly ["name", "connectionId", "icon", "connectionFields"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFiatCurrencies: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly rate: {
                        readonly type: "number";
                    };
                    readonly symbol: {
                        readonly type: "string";
                    };
                    readonly imageUrl: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["name", "rate", "symbol", "imageUrl"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMarketCap: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly marketCap: {
                    readonly type: "number";
                };
                readonly volume: {
                    readonly type: "number";
                };
                readonly btcDominance: {
                    readonly type: "number";
                };
                readonly marketCapChange: {
                    readonly type: "number";
                };
                readonly volumeChange: {
                    readonly type: "number";
                };
                readonly btcDominanceChange: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["marketCap", "volume", "btcDominance", "marketCapChange", "volumeChange", "btcDominanceChange"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNews: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2024-04-27T11:09:08.159Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly to: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2024-04-28T13:09:08.159Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly total: {
                    readonly type: "number";
                };
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly searchKeyWords: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly feedDate: {
                                readonly type: "number";
                            };
                            readonly source: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly isFeatured: {
                                readonly type: "boolean";
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly imgURL: {
                                readonly type: "string";
                            };
                            readonly link: {
                                readonly type: "string";
                            };
                            readonly sourceLink: {
                                readonly type: "string";
                            };
                            readonly imgUrl: {
                                readonly type: "string";
                            };
                            readonly reactionsCount: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly reactions: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly shareURL: {
                                readonly type: "string";
                            };
                            readonly relatedCoins: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly content: {
                                readonly type: "boolean";
                            };
                            readonly bigImg: {
                                readonly type: "boolean";
                            };
                            readonly coins: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly required: readonly ["id", "feedDate", "source", "title", "isFeatured", "link", "sourceLink", "imgUrl", "reactionsCount", "reactions", "shareURL", "relatedCoins", "content", "bigImg"];
                    };
                };
            };
            readonly required: readonly ["total", "result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNewsById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly searchKeyWords: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly feedDate: {
                    readonly type: "number";
                };
                readonly source: {
                    readonly type: "string";
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly isFeatured: {
                    readonly type: "boolean";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly imgURL: {
                    readonly type: "string";
                };
                readonly link: {
                    readonly type: "string";
                };
                readonly sourceLink: {
                    readonly type: "string";
                };
                readonly imgUrl: {
                    readonly type: "string";
                };
                readonly reactionsCount: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly reactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly shareURL: {
                    readonly type: "string";
                };
                readonly relatedCoins: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly content: {
                    readonly type: "boolean";
                };
                readonly bigImg: {
                    readonly type: "boolean";
                };
                readonly coins: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly required: readonly ["id", "feedDate", "source", "title", "isFeatured", "link", "sourceLink", "imgUrl", "reactionsCount", "reactions", "shareURL", "relatedCoins", "content", "bigImg"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNewsByType: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["handpicked", "trending", "latest", "bullish", "bearish"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["type"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly searchKeyWords: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly feedDate: {
                        readonly type: "number";
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly title: {
                        readonly type: "string";
                    };
                    readonly isFeatured: {
                        readonly type: "boolean";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly imgURL: {
                        readonly type: "string";
                    };
                    readonly link: {
                        readonly type: "string";
                    };
                    readonly sourceLink: {
                        readonly type: "string";
                    };
                    readonly imgUrl: {
                        readonly type: "string";
                    };
                    readonly reactionsCount: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly reactions: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly shareURL: {
                        readonly type: "string";
                    };
                    readonly relatedCoins: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly content: {
                        readonly type: "boolean";
                    };
                    readonly bigImg: {
                        readonly type: "boolean";
                    };
                    readonly coins: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly required: readonly ["id", "feedDate", "source", "title", "isFeatured", "link", "sourceLink", "imgUrl", "reactionsCount", "reactions", "shareURL", "relatedCoins", "content", "bigImg"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNewsSources: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly sourcename: {
                        readonly type: "string";
                    };
                    readonly coinid: {
                        readonly type: "string";
                    };
                    readonly logo: {
                        readonly type: "string";
                    };
                    readonly sourceImg: {
                        readonly type: "string";
                    };
                    readonly weburl: {
                        readonly type: "string";
                    };
                    readonly feedurl: {
                        readonly type: "string";
                    };
                    readonly _created_at: {
                        readonly format: "date-time";
                        readonly type: "string";
                    };
                    readonly _updated_at: {
                        readonly format: "date-time";
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["sourcename", "weburl", "feedurl", "_created_at"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftCollectionAssetByTokenid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly tokenId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["collectionAddress", "tokenId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                };
                readonly blockchain: {
                    readonly type: "string";
                };
                readonly tokenId: {
                    readonly type: "string";
                };
                readonly attributes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly collectionId: {
                    readonly type: "string";
                };
                readonly lastSaleDate: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly lastSalePrice: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly previewUrl: {
                    readonly type: "string";
                };
                readonly rarityRank: {
                    readonly type: "number";
                };
                readonly rarityScore: {
                    readonly type: "number";
                };
                readonly source: {
                    readonly type: "string";
                };
                readonly standard: {
                    readonly type: "string";
                };
                readonly url: {
                    readonly type: "string";
                };
                readonly listSource: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly listPrice: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["address", "blockchain", "tokenId", "attributes", "collectionId", "lastSaleDate", "lastSalePrice", "name", "previewUrl", "rarityRank", "rarityScore", "source", "standard", "url", "listSource", "listPrice"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftCollectionAssetsByAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["collectionAddress"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly type: {
                    readonly enum: readonly ["listed", "all"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["meta"];
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly examples: readonly [40];
                        };
                        readonly itemCount: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly pageCount: {
                            readonly type: "number";
                            readonly examples: readonly [3];
                        };
                        readonly hasPreviousPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly hasNextPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["address", "blockchain", "tokenId", "attributes", "collectionId", "lastSaleDate", "lastSalePrice", "name", "previewUrl", "rarityRank", "rarityScore", "source", "standard", "url", "listSource", "listPrice"];
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly blockchain: {
                                readonly type: "string";
                            };
                            readonly tokenId: {
                                readonly type: "string";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly collectionId: {
                                readonly type: "string";
                            };
                            readonly lastSaleDate: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly lastSalePrice: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly previewUrl: {
                                readonly type: "string";
                            };
                            readonly rarityRank: {
                                readonly type: "number";
                            };
                            readonly rarityScore: {
                                readonly type: "number";
                            };
                            readonly source: {
                                readonly type: "string";
                            };
                            readonly standard: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly listSource: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly listPrice: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftCollectionByAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["collectionAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                };
                readonly bannerImg: {
                    readonly type: "string";
                    readonly examples: readonly ["https://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuAM1rRhySRbERY0%2B6lnhVU9Ds%2BKgl0YTWu1CsabpicYXk7sRc87%2Bv7MV0GJIisUgdCn0xh3GghmVzyiBQm04y%2FNe30W0jRiHGqRrchCJdrbOlBwksv1hh6xX%2FzMYhpUp0%2Bpimr8XIJiS3Ugzqn3RpUUJ5WYT8ZJi%2B4RpGcBaOOYnuyBDHqGBZKKYLhXt04tPHfA%3D%3D"];
                };
                readonly blockchain: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly img: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly relevantUrls: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Etherscan"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                            };
                        };
                        readonly required: readonly ["name", "url"];
                    };
                };
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["bored_ape_yacht_club"];
                };
                readonly slugCs: {
                    readonly type: "string";
                    readonly examples: readonly ["bored_ape_yacht_club"];
                };
                readonly source: {
                    readonly type: "string";
                    readonly examples: readonly ["opensea"];
                };
                readonly verified: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly rank: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly rankAll: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly averagePrice: {
                    readonly type: "number";
                    readonly examples: readonly [14.49999];
                };
                readonly count: {
                    readonly type: "number";
                    readonly examples: readonly [200];
                };
                readonly floorPriceMc: {
                    readonly type: "number";
                    readonly examples: readonly [14.49999];
                };
                readonly floorPriceUsd: {
                    readonly type: "number";
                    readonly examples: readonly [20000];
                };
                readonly mainCurrencyId: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly marketcapMc: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly marketcapUsd: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly oneDayAveragePrice: {
                    readonly type: "number";
                    readonly examples: readonly [0.06865];
                };
                readonly oneDaySales: {
                    readonly type: "number";
                    readonly examples: readonly [5];
                };
                readonly ownersCount: {
                    readonly type: "number";
                    readonly examples: readonly [4309];
                };
                readonly sevenDayAveragePrice: {
                    readonly type: "number";
                    readonly examples: readonly [0.0606129166666667];
                };
                readonly sevenDaySales: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                };
                readonly thirtyDayAveragePrice: {
                    readonly type: "number";
                    readonly examples: readonly [0.0606129166666667];
                };
                readonly thirtyDaySales: {
                    readonly type: "number";
                    readonly examples: readonly [23];
                };
                readonly thirtyDayVolume: {
                    readonly type: "number";
                    readonly examples: readonly [4.34301];
                };
                readonly totalSales: {
                    readonly type: "number";
                    readonly examples: readonly [2000];
                };
                readonly totalSupply: {
                    readonly type: "number";
                    readonly examples: readonly [5000];
                };
                readonly totalVolume: {
                    readonly type: "number";
                    readonly examples: readonly [50009];
                };
                readonly volumeMc24h: {
                    readonly type: "number";
                    readonly examples: readonly [10];
                };
                readonly volumeMc7d: {
                    readonly type: "number";
                    readonly examples: readonly [11];
                };
                readonly volumeUsd24h: {
                    readonly type: "number";
                    readonly examples: readonly [1200];
                };
                readonly volumeUsd7d: {
                    readonly type: "number";
                    readonly examples: readonly [1400];
                };
                readonly floorPriceChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly floorPriceChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [-19];
                };
                readonly marketcapChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                };
                readonly marketcapChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [-10];
                };
                readonly volumeChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [1000];
                };
                readonly volumeChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [12];
                };
                readonly ownersCountChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [3];
                };
                readonly ownersCountChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [8];
                };
                readonly salesInProfit: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly salesInProfitChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly salesInProfitChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [8];
                };
                readonly oneDayChange: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly transactionsUpdateDate: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2022-08-11T13:33:50.563Z"];
                };
                readonly sevenDayChange: {
                    readonly type: "number";
                    readonly examples: readonly [0.705128205128205];
                };
                readonly thirtyDayChange: {
                    readonly type: "number";
                    readonly examples: readonly [2.7];
                };
                readonly listedCount: {
                    readonly type: "number";
                    readonly examples: readonly [135];
                };
                readonly show: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly creatorFee: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                };
                readonly volume: {
                    readonly type: "number";
                    readonly examples: readonly [186.72795];
                };
                readonly createdDate: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-28T00:08:08.951Z"];
                };
            };
            readonly required: readonly ["address", "description", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftsByWallet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["meta"];
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly examples: readonly [40];
                        };
                        readonly itemCount: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly pageCount: {
                            readonly type: "number";
                            readonly examples: readonly [3];
                        };
                        readonly hasPreviousPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly hasNextPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["name", "logo", "address", "totalFloorPrice", "totalLastSalePrice", "id", "assetsCount", "assets", "floorPrice"];
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly logo: {
                                readonly type: "string";
                            };
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly totalFloorPrice: {
                                readonly type: "number";
                            };
                            readonly totalLastSalePrice: {
                                readonly type: "number";
                            };
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly assetsCount: {
                                readonly type: "number";
                            };
                            readonly assets: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly floorPrice: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPortfolioCoins: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly sharetoken: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "You can get your share token from the portfolio you want to retrive data from by clicking Share button on CoinStats web app portfolio tracker section - top right. ";
                };
            };
            readonly required: readonly ["sharetoken"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly count: {
                                readonly type: "number";
                                readonly description: "Coin Count";
                                readonly examples: readonly [1];
                            };
                            readonly coin: {
                                readonly description: "Coin Object";
                                readonly type: "object";
                                readonly required: readonly ["rank", "identifier", "symbol", "name", "icon", "priceChange24h", "priceChange1h", "priceChange7d", "volume"];
                                readonly properties: {
                                    readonly rank: {
                                        readonly type: "number";
                                        readonly description: "Coin Rank";
                                    };
                                    readonly identifier: {
                                        readonly type: "string";
                                        readonly description: "Coin Identifier";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                        readonly description: "Coin Rank";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly icon: {
                                        readonly type: "string";
                                    };
                                    readonly isFake: {
                                        readonly type: "boolean";
                                    };
                                    readonly isFiat: {
                                        readonly type: "boolean";
                                    };
                                    readonly priceChange24h: {
                                        readonly type: "number";
                                    };
                                    readonly priceChange1h: {
                                        readonly type: "number";
                                    };
                                    readonly priceChange7d: {
                                        readonly type: "number";
                                    };
                                    readonly volume: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly price: {
                                readonly description: "Price Object";
                                readonly type: "object";
                                readonly required: readonly ["USD", "BTC", "ETH"];
                                readonly properties: {
                                    readonly USD: {
                                        readonly type: "number";
                                        readonly description: "USD Value";
                                    };
                                    readonly BTC: {
                                        readonly type: "number";
                                        readonly description: "BTC Value";
                                    };
                                    readonly ETH: {
                                        readonly type: "number";
                                        readonly description: "ETH Value";
                                    };
                                };
                            };
                            readonly profit: {
                                readonly description: "Profit Object";
                                readonly type: "object";
                                readonly required: readonly ["allTime", "hour24", "lastTrade", "currentHoldings"];
                                readonly properties: {
                                    readonly allTime: {
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly hour24: {
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly lastTrade: {
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly currentHoldings: {
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly averageBuy: {
                                readonly description: "Average Buy Object";
                                readonly type: "object";
                                readonly properties: {
                                    readonly allTime: {
                                        readonly description: "All Time Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly hour24: {
                                        readonly description: "24 Hour Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly lastTrade: {
                                        readonly description: "Last Trade Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly currentHoldings: {
                                        readonly description: "Current Holdings Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly averageSell: {
                                readonly description: "Average Sell Object";
                                readonly type: "object";
                                readonly properties: {
                                    readonly allTime: {
                                        readonly description: "All Time Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly hour24: {
                                        readonly description: "24 Hour Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly lastTrade: {
                                        readonly description: "Last Trade Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly currentHoldings: {
                                        readonly description: "Current Holdings Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly profitPercent: {
                                readonly description: "Profit Percent Object";
                                readonly type: "object";
                                readonly required: readonly ["allTime", "hour24", "lastTrade", "currentHoldings"];
                                readonly properties: {
                                    readonly allTime: {
                                        readonly description: "All Time Profit Percent Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly hour24: {
                                        readonly description: "24 Hour Profit Percent Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly lastTrade: {
                                        readonly description: "Last Trade Profit Percent Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly currentHoldings: {
                                        readonly description: "Current Holdings Profit Percent Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly required: readonly ["count", "coin", "price", "profitPercent"];
                    };
                };
            };
            readonly required: readonly ["result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPortfolioTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly coinId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["currency"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly sharetoken: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "You can get your share token from the portfolio you want to retrive data from by clicking Share button on CoinStats web app portfolio tracker section - top right. ";
                };
            };
            readonly required: readonly ["sharetoken"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly transactionType: {
                                readonly type: "string";
                            };
                            readonly date: {
                                readonly type: "string";
                            };
                            readonly coinData: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly identifier: {
                                        readonly type: "string";
                                    };
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly totalWorth: {
                                        readonly type: "number";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["identifier", "count", "symbol", "totalWorth", "currentValue"];
                            };
                            readonly profitLoss: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly profit: {
                                        readonly type: "number";
                                    };
                                    readonly profitPercent: {
                                        readonly type: "number";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["profit", "profitPercent", "currentValue"];
                            };
                            readonly fee: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly coin: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly rank: {
                                                readonly type: "number";
                                                readonly description: "Coin Rank";
                                            };
                                            readonly identifier: {
                                                readonly type: "string";
                                                readonly description: "Coin Identifier";
                                            };
                                            readonly symbol: {
                                                readonly type: "string";
                                                readonly description: "Coin Rank";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly icon: {
                                                readonly type: "string";
                                            };
                                            readonly isFake: {
                                                readonly type: "boolean";
                                            };
                                            readonly isFiat: {
                                                readonly type: "boolean";
                                            };
                                            readonly priceChange24h: {
                                                readonly type: "number";
                                            };
                                            readonly priceChange1h: {
                                                readonly type: "number";
                                            };
                                            readonly priceChange7d: {
                                                readonly type: "number";
                                            };
                                            readonly volume: {
                                                readonly type: "number";
                                            };
                                        };
                                        readonly required: readonly ["rank", "identifier", "symbol", "name", "icon", "priceChange24h", "priceChange1h", "priceChange7d", "volume"];
                                    };
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly toAddress: {
                                        readonly type: "string";
                                    };
                                    readonly fromAddress: {
                                        readonly type: "string";
                                    };
                                    readonly totalWorth: {
                                        readonly type: "number";
                                    };
                                    readonly price: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["coin", "count", "totalWorth", "price"];
                            };
                            readonly transfers: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly transferType: {
                                            readonly type: "string";
                                        };
                                        readonly items: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly coin: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly rank: {
                                                                readonly type: "number";
                                                                readonly description: "Coin Rank";
                                                            };
                                                            readonly identifier: {
                                                                readonly type: "string";
                                                                readonly description: "Coin Identifier";
                                                            };
                                                            readonly symbol: {
                                                                readonly type: "string";
                                                                readonly description: "Coin Rank";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                            };
                                                            readonly icon: {
                                                                readonly type: "string";
                                                            };
                                                            readonly isFake: {
                                                                readonly type: "boolean";
                                                            };
                                                            readonly isFiat: {
                                                                readonly type: "boolean";
                                                            };
                                                            readonly priceChange24h: {
                                                                readonly type: "number";
                                                            };
                                                            readonly priceChange1h: {
                                                                readonly type: "number";
                                                            };
                                                            readonly priceChange7d: {
                                                                readonly type: "number";
                                                            };
                                                            readonly volume: {
                                                                readonly type: "number";
                                                            };
                                                        };
                                                        readonly required: readonly ["rank", "identifier", "symbol", "name", "icon", "priceChange24h", "priceChange1h", "priceChange7d", "volume"];
                                                    };
                                                    readonly count: {
                                                        readonly type: "number";
                                                    };
                                                    readonly toAddress: {
                                                        readonly type: "string";
                                                    };
                                                    readonly fromAddress: {
                                                        readonly type: "string";
                                                    };
                                                    readonly totalWorth: {
                                                        readonly type: "number";
                                                    };
                                                    readonly price: {
                                                        readonly type: "number";
                                                    };
                                                };
                                                readonly required: readonly ["coin"];
                                            };
                                        };
                                    };
                                    readonly required: readonly ["transferType", "items"];
                                };
                            };
                            readonly portfolioInfo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly icon: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["name", "icon"];
                            };
                        };
                        readonly required: readonly ["transactionType", "date", "profitLoss", "fee", "portfolioInfo"];
                    };
                };
                readonly meta: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                        };
                        readonly limit: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["page", "limit"];
                };
            };
            readonly required: readonly ["data", "meta"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTickerExchanges: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly icon: {
                        readonly type: "string";
                    };
                    readonly rank: {
                        readonly type: "number";
                    };
                    readonly change24h: {
                        readonly type: "number";
                    };
                    readonly url: {
                        readonly type: "string";
                    };
                    readonly volume24h: {
                        readonly type: "number";
                    };
                    readonly volume7d: {
                        readonly type: "number";
                    };
                    readonly volume1m: {
                        readonly type: "number";
                    };
                };
                readonly required: readonly ["id", "name", "rank", "change24h", "volume24h", "volume7d"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTickerMarkets: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly examples: readonly ["Binance"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly fromCoin: {
                    readonly type: "string";
                    readonly examples: readonly ["BTC"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly toCoin: {
                    readonly type: "string";
                    readonly examples: readonly ["USDT"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly coinId: {
                    readonly type: "string";
                    readonly examples: readonly ["bitcoin"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly onlyVerified: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly meta: {
                        readonly type: "object";
                        readonly properties: {
                            readonly page: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly limit: {
                                readonly type: "number";
                                readonly examples: readonly [40];
                            };
                            readonly itemCount: {
                                readonly type: "number";
                                readonly examples: readonly [100];
                            };
                            readonly pageCount: {
                                readonly type: "number";
                                readonly examples: readonly [3];
                            };
                            readonly hasPreviousPage: {
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly hasNextPage: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                        };
                        readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                    };
                    readonly result: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly price: {
                                    readonly type: "number";
                                };
                                readonly _created_at: {
                                    readonly format: "date-time";
                                    readonly type: "string";
                                };
                                readonly _updated_at: {
                                    readonly format: "date-time";
                                    readonly type: "string";
                                };
                                readonly exchange: {
                                    readonly type: "string";
                                };
                                readonly pair: {
                                    readonly type: "string";
                                };
                                readonly from: {
                                    readonly type: "string";
                                };
                                readonly to: {
                                    readonly type: "string";
                                };
                                readonly pairPrice: {
                                    readonly type: "number";
                                };
                                readonly pairVolume: {
                                    readonly type: "number";
                                };
                                readonly volume: {
                                    readonly type: "number";
                                };
                            };
                            readonly required: readonly ["price", "_created_at", "_updated_at", "exchange", "pair", "from", "to", "pairPrice", "pairVolume", "volume"];
                        };
                    };
                };
                readonly required: readonly ["meta", "result"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTrendingNfts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["meta"];
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly examples: readonly [40];
                        };
                        readonly itemCount: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly pageCount: {
                            readonly type: "number";
                            readonly examples: readonly [3];
                        };
                        readonly hasPreviousPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly hasNextPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["address", "description", "name"];
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                                readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                            };
                            readonly bannerImg: {
                                readonly type: "string";
                                readonly examples: readonly ["https://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuAM1rRhySRbERY0%2B6lnhVU9Ds%2BKgl0YTWu1CsabpicYXk7sRc87%2Bv7MV0GJIisUgdCn0xh3GghmVzyiBQm04y%2FNe30W0jRiHGqRrchCJdrbOlBwksv1hh6xX%2FzMYhpUp0%2Bpimr8XIJiS3Ugzqn3RpUUJ5WYT8ZJi%2B4RpGcBaOOYnuyBDHqGBZKKYLhXt04tPHfA%3D%3D"];
                            };
                            readonly blockchain: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly img: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly relevantUrls: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly required: readonly ["name", "url"];
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Etherscan"];
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                    };
                                };
                            };
                            readonly slug: {
                                readonly type: "string";
                                readonly examples: readonly ["bored_ape_yacht_club"];
                            };
                            readonly slugCs: {
                                readonly type: "string";
                                readonly examples: readonly ["bored_ape_yacht_club"];
                            };
                            readonly source: {
                                readonly type: "string";
                                readonly examples: readonly ["opensea"];
                            };
                            readonly verified: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly rank: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly rankAll: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly averagePrice: {
                                readonly type: "number";
                                readonly examples: readonly [14.49999];
                            };
                            readonly count: {
                                readonly type: "number";
                                readonly examples: readonly [200];
                            };
                            readonly floorPriceMc: {
                                readonly type: "number";
                                readonly examples: readonly [14.49999];
                            };
                            readonly floorPriceUsd: {
                                readonly type: "number";
                                readonly examples: readonly [20000];
                            };
                            readonly mainCurrencyId: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly marketcapMc: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly marketcapUsd: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly oneDayAveragePrice: {
                                readonly type: "number";
                                readonly examples: readonly [0.06865];
                            };
                            readonly oneDaySales: {
                                readonly type: "number";
                                readonly examples: readonly [5];
                            };
                            readonly ownersCount: {
                                readonly type: "number";
                                readonly examples: readonly [4309];
                            };
                            readonly sevenDayAveragePrice: {
                                readonly type: "number";
                                readonly examples: readonly [0.0606129166666667];
                            };
                            readonly sevenDaySales: {
                                readonly type: "number";
                                readonly examples: readonly [20];
                            };
                            readonly thirtyDayAveragePrice: {
                                readonly type: "number";
                                readonly examples: readonly [0.0606129166666667];
                            };
                            readonly thirtyDaySales: {
                                readonly type: "number";
                                readonly examples: readonly [23];
                            };
                            readonly thirtyDayVolume: {
                                readonly type: "number";
                                readonly examples: readonly [4.34301];
                            };
                            readonly totalSales: {
                                readonly type: "number";
                                readonly examples: readonly [2000];
                            };
                            readonly totalSupply: {
                                readonly type: "number";
                                readonly examples: readonly [5000];
                            };
                            readonly totalVolume: {
                                readonly type: "number";
                                readonly examples: readonly [50009];
                            };
                            readonly volumeMc24h: {
                                readonly type: "number";
                                readonly examples: readonly [10];
                            };
                            readonly volumeMc7d: {
                                readonly type: "number";
                                readonly examples: readonly [11];
                            };
                            readonly volumeUsd24h: {
                                readonly type: "number";
                                readonly examples: readonly [1200];
                            };
                            readonly volumeUsd7d: {
                                readonly type: "number";
                                readonly examples: readonly [1400];
                            };
                            readonly floorPriceChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly floorPriceChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [-19];
                            };
                            readonly marketcapChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [20];
                            };
                            readonly marketcapChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [-10];
                            };
                            readonly volumeChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [1000];
                            };
                            readonly volumeChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [12];
                            };
                            readonly ownersCountChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [3];
                            };
                            readonly ownersCountChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [8];
                            };
                            readonly salesInProfit: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly salesInProfitChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [2];
                            };
                            readonly salesInProfitChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [8];
                            };
                            readonly oneDayChange: {
                                readonly type: "number";
                                readonly examples: readonly [2];
                            };
                            readonly transactionsUpdateDate: {
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2022-08-11T13:33:50.563Z"];
                            };
                            readonly sevenDayChange: {
                                readonly type: "number";
                                readonly examples: readonly [0.705128205128205];
                            };
                            readonly thirtyDayChange: {
                                readonly type: "number";
                                readonly examples: readonly [2.7];
                            };
                            readonly listedCount: {
                                readonly type: "number";
                                readonly examples: readonly [135];
                            };
                            readonly show: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly creatorFee: {
                                readonly type: "number";
                                readonly examples: readonly [20];
                            };
                            readonly volume: {
                                readonly type: "number";
                                readonly examples: readonly [186.72795];
                            };
                            readonly createdDate: {
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2021-09-28T00:08:08.951Z"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletBalance: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly connectionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of connection, which you received from /wallet/blockchains call response.";
                };
            };
            readonly required: readonly ["address", "connectionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly chain: {
                        readonly type: "string";
                    };
                    readonly coinId: {
                        readonly type: "string";
                    };
                    readonly amount: {
                        readonly type: "number";
                    };
                };
                readonly required: readonly ["chain", "coinId", "amount"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletSyncStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly connectionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of connection, which you received from /wallet/blockchains call response.";
                };
            };
            readonly required: readonly ["address", "connectionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["syncing", "synced"];
                    readonly description: "`syncing` `synced`";
                };
            };
            readonly required: readonly ["status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2024-04-27T11:09:08.155Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly to: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2024-04-28T13:09:08.155Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly types: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma separated values of (deposit,withdraw,approve,executed,balance,fee)";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly connectionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of connection, which you received from /wallet/blockchains call response.";
                };
                readonly txId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "To search with transaction hash";
                };
            };
            readonly required: readonly ["address", "connectionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                        };
                        readonly limit: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["page", "limit"];
                };
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["deposit", "withdraw", "approve", "executed", "balance", "fee"];
                                readonly description: "`deposit` `withdraw` `approve` `executed` `balance` `fee`";
                            };
                            readonly date: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly mainContent: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly coinIcons: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly coinAssets: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly required: readonly ["coinIcons", "coinAssets"];
                            };
                            readonly coinData: {
                                readonly description: "Only sent if there is at least 1 coin in transactions";
                                readonly type: "object";
                                readonly required: readonly ["count", "symbol", "currentValue"];
                                readonly properties: {
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly profitLoss: {
                                readonly description: "Only sent if there is at least 1 coin in transactions";
                                readonly type: "object";
                                readonly required: readonly ["profit", "profitPercent"];
                                readonly properties: {
                                    readonly profit: {
                                        readonly type: "number";
                                    };
                                    readonly profitPercent: {
                                        readonly type: "number";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly transactions: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly action: {
                                            readonly type: "string";
                                        };
                                        readonly items: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly required: readonly ["action", "items"];
                                };
                            };
                            readonly fee: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "Sent only when fee is another transaction object";
                                    };
                                    readonly coin: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly icon: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["id", "name", "symbol", "icon"];
                                    };
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly totalWorth: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["coin", "count", "totalWorth"];
                            };
                            readonly hash: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly explorerUrl: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "explorerUrl"];
                            };
                        };
                        readonly required: readonly ["type", "date", "mainContent", "transactions"];
                    };
                };
            };
            readonly required: readonly ["meta", "result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const NftChange: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly examples: readonly ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1111111254fb6c44bac0bed2854e76f90643097d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly data: {
                    readonly default: "0x";
                    readonly type: "string";
                    readonly examples: readonly ["0x"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x5208"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gasPrice: {
                    readonly type: "string";
                    readonly examples: readonly ["0x65bcb2480"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly value: {
                    readonly default: "0x0";
                    readonly type: "string";
                    readonly examples: readonly ["0x9184e72a000"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x47c86fb27"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxPriorityFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x2faf080"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["from", "to"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly nftChange: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contractAddress: {
                            readonly type: "object";
                            readonly properties: {
                                readonly from: {
                                    readonly type: "string";
                                };
                                readonly to: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
            };
            readonly required: readonly ["nftChange"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TransactionPreview: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly examples: readonly ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1111111254fb6c44bac0bed2854e76f90643097d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly data: {
                    readonly default: "0x";
                    readonly type: "string";
                    readonly examples: readonly ["0x"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x5208"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly gasPrice: {
                    readonly type: "string";
                    readonly examples: readonly ["0x65bcb2480"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly value: {
                    readonly default: "0x0";
                    readonly type: "string";
                    readonly examples: readonly ["0x9184e72a000"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x47c86fb27"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly maxPriorityFeePerGas: {
                    readonly type: "string";
                    readonly examples: readonly ["0x2faf080"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["from", "to"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ethChange: {
                    readonly type: "object";
                    readonly required: readonly ["from", "to"];
                    readonly properties: {
                        readonly from: {
                            readonly type: "string";
                            readonly examples: readonly ["0x7436fd77bfd012"];
                        };
                        readonly to: {
                            readonly type: "string";
                            readonly examples: readonly ["0x6f32939da5dbd5"];
                        };
                    };
                };
                readonly tokenChange: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contractAddress: {
                            readonly type: "object";
                            readonly properties: {
                                readonly from: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xd06b478db81fe8dfde"];
                                };
                                readonly to: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0xd06b401e632924b516"];
                                };
                            };
                        };
                    };
                };
                readonly nftChange: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contractAddress: {
                            readonly type: "object";
                            readonly properties: {
                                readonly tokenId: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly from: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xd06b478db81fe8dfde"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xd06b401e632924b516"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly allowanceChange: {
                    readonly type: "object";
                    readonly properties: {
                        readonly erc20: {
                            readonly type: "object";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly from: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xd06b478db81fe8dfde"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xd06b401e632924b516"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly erc721: {
                            readonly type: "object";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly from: {
                                            readonly type: "boolean";
                                            readonly examples: readonly ["0xd06b478db81fe8dfde"];
                                        };
                                        readonly to: {
                                            readonly type: "boolean";
                                            readonly examples: readonly ["0xd06b401e632924b516"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly approveForAll: {
                            readonly type: "object";
                            readonly properties: {
                                readonly contractAddress: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly from: {
                                            readonly type: "boolean";
                                            readonly examples: readonly ["0xd06b478db81fe8dfde"];
                                        };
                                        readonly to: {
                                            readonly type: "boolean";
                                            readonly examples: readonly ["0xd06b401e632924b516"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly required: readonly ["erc20", "erc721", "approveForAll"];
                };
            };
            readonly required: readonly ["ethChange", "tokenChange", "nftChange", "allowanceChange"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TransactionsSync: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly connectionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of connection, which you received from /wallet/blockchains call response.";
                };
            };
            readonly required: readonly ["address", "connectionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["syncing", "synced"];
                    readonly description: "`syncing` `synced`";
                };
            };
            readonly required: readonly ["status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AllowanceChange, Erc20BalancePreview, EthereumBalancePreview, GetBlockchains, GetCoinAvgPrice, GetCoinById, GetCoinChartById, GetCoinExchangePrice, GetCoins, GetCurrencies, GetExchangeBalance, GetExchangeSyncStatus, GetExchangeTransactions, GetExchanges, GetFiatCurrencies, GetMarketCap, GetNews, GetNewsById, GetNewsByType, GetNewsSources, GetNftCollectionAssetByTokenid, GetNftCollectionAssetsByAddress, GetNftCollectionByAddress, GetNftsByWallet, GetPortfolioCoins, GetPortfolioTransactions, GetTickerExchanges, GetTickerMarkets, GetTrendingNfts, GetWalletBalance, GetWalletSyncStatus, GetWalletTransactions, NftChange, TransactionPreview, TransactionsSync };
