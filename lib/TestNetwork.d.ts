import { BackwardsCompatibilityProviderAdapter } from 'hardhat/internal/core/providers/backwards-compatibility';
import { JsonRpcServer } from 'hardhat/internal/hardhat-network/jsonrpc/server';
import { GenesisAccount } from 'hardhat/internal/hardhat-network/provider/node-types';
interface TestNetworkInitParams {
    jsonRPC: boolean;
    port: number;
    chainId: number;
    networkId: number;
    genesisAccounts: GenesisAccount[];
    blockGasLimit: number;
}
export declare class TestNetwork {
    provider: BackwardsCompatibilityProviderAdapter;
    server?: JsonRpcServer;
    constructor(params: {
        provider: BackwardsCompatibilityProviderAdapter;
        server?: JsonRpcServer;
    });
    static init(_params?: Partial<TestNetworkInitParams>): Promise<TestNetwork>;
    close(): Promise<void>;
}
export {};
//# sourceMappingURL=TestNetwork.d.ts.map