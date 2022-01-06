"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestNetwork = void 0;
const tslib_1 = require("tslib");
const HardhatNetworkFakeModuleLogger_1 = require("./utils/HardhatNetworkFakeModuleLogger");
const provider_1 = require("hardhat/internal/hardhat-network/provider/provider");
const backwards_compatibility_1 = require("hardhat/internal/core/providers/backwards-compatibility");
const server_1 = require("hardhat/internal/hardhat-network/jsonrpc/server");
const ethereumjs_util_1 = require("ethereumjs-util");
const DEFAULT_CHAIN_ID = 123;
const DEFAULT_NETWORK_ID = 234;
const DEFAULT_GENESIS_ACCOUNTS = [
    {
        balance: '0x295BE96E64066972000000',
        privateKey: '0xa3dac6ca0b1c61f5f0a0b3a0acf93c9a52fd94e8e33d243d3b3a8b8c5dc37f0b',
    },
    {
        balance: '0x295BE96E64066972000000',
        privateKey: '0xfc6e27fbc1cc2eb3f04dab6259d926280d4aa8acb8c83f3de506ab9d589d6cc2',
    },
    {
        balance: '0x295BE96E64066972000000',
        privateKey: '0x735e4ab2cd08798dee1a5fc3a7af4bbdeece90c7dbdf878ceec556c84bd5ec88',
    },
];
const DEFAULT_JSON_RPC_PORT = 8545;
const DEFAULT_BLOCK_GAS_LIMIT = 6000000;
class TestNetwork {
    constructor(params) {
        this.provider = params.provider;
        this.server = params.server;
    }
    static init(_params = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const params = Object.assign({ jsonRPC: true, genesisAccounts: DEFAULT_GENESIS_ACCOUNTS, chainId: DEFAULT_CHAIN_ID, networkId: DEFAULT_NETWORK_ID, port: DEFAULT_JSON_RPC_PORT, blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT }, _params);
            const logger = new HardhatNetworkFakeModuleLogger_1.HardhatNetworkFakeModuleLogger(false);
            const hardhatNetwork = new provider_1.HardhatNetworkProvider('istanbul', 'WalletConnectTest', params.chainId, params.networkId, params.blockGasLimit, undefined, new ethereumjs_util_1.BN(1), true, true, true, 500, logger, DEFAULT_GENESIS_ACCOUNTS, undefined, true, undefined, undefined, undefined);
            let provider = new backwards_compatibility_1.BackwardsCompatibilityProviderAdapter(hardhatNetwork);
            let server;
            if (params.jsonRPC) {
                server = new server_1.JsonRpcServer({
                    hostname: 'localhost',
                    port: params.port,
                    provider: provider,
                });
                yield server.listen();
                provider = new backwards_compatibility_1.BackwardsCompatibilityProviderAdapter(server.getProvider());
            }
            return new TestNetwork({ provider: provider, server: server });
        });
    }
    close() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.server) {
                yield this.provider.send("evm_setIntervalMining", [0]);
                yield this.server.close();
                delete this.server;
            }
            delete this.provider;
        });
    }
}
exports.TestNetwork = TestNetwork;
//# sourceMappingURL=TestNetwork.js.map