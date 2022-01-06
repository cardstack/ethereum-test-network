import { ModulesLogger } from "hardhat/internal/hardhat-network/provider/modules/logger";
export declare class HardhatNetworkFakeModuleLogger extends ModulesLogger {
    lines: string[];
    constructor(enabled: boolean);
    getOutput(): string;
    reset(): void;
}
//# sourceMappingURL=HardhatNetworkFakeModuleLogger.d.ts.map