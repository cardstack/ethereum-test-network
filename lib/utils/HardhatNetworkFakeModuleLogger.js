"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardhatNetworkFakeModuleLogger = void 0;
const logger_1 = require("hardhat/internal/hardhat-network/provider/modules/logger");
class HardhatNetworkFakeModuleLogger extends logger_1.ModulesLogger {
    constructor(enabled) {
        super(enabled, line => {
            this.lines.push(line);
        }, line => {
            this.lines[this.lines.length - 1] = line;
        });
        this.lines = [];
    }
    getOutput() {
        return this.lines.join("\n");
    }
    reset() {
        this.lines = [];
    }
}
exports.HardhatNetworkFakeModuleLogger = HardhatNetworkFakeModuleLogger;
//# sourceMappingURL=HardhatNetworkFakeModuleLogger.js.map