"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const TestNetwork_1 = require("./TestNetwork");
const ERC20Token__factory_1 = require("./utils/ERC20Token__factory");
const HTTP_JSON_RPC_PROVIDER = 'http://localhost:8545';
const WS_JSON_RPC_PROVIDER = 'ws://localhost:8545';
describe('eth test network', () => {
    let testnetwork;
    beforeEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        testnetwork = yield TestNetwork_1.TestNetwork.init();
    }));
    afterEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield testnetwork.close();
    }));
    describe('http', function () {
        it('should check block number', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const provider = new ethers_1.ethers.providers.JsonRpcProvider(HTTP_JSON_RPC_PROVIDER);
            const blockNumber = yield provider.getBlockNumber();
            expect(blockNumber).toBe(0);
        }));
        it('genesis accounts should have funds', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const provider = new ethers_1.ethers.providers.JsonRpcProvider(HTTP_JSON_RPC_PROVIDER);
            const wallet = new ethers_1.ethers.Wallet('0xa3dac6ca0b1c61f5f0a0b3a0acf93c9a52fd94e8e33d243d3b3a8b8c5dc37f0b');
            const balance = yield provider.getBalance(wallet.address);
            expect(balance.gt(ethers_1.ethers.constants.Zero)).toBeTruthy();
        }));
        it('should be able to send funds', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const provider = new ethers_1.ethers.providers.JsonRpcProvider(HTTP_JSON_RPC_PROVIDER);
            const wallet = new ethers_1.ethers.Wallet('0xa3dac6ca0b1c61f5f0a0b3a0acf93c9a52fd94e8e33d243d3b3a8b8c5dc37f0b').connect(provider);
            const randomWallet = ethers_1.ethers.Wallet.createRandom();
            const value = ethers_1.ethers.utils.parseEther('500');
            const tx = yield wallet.sendTransaction({
                to: randomWallet.address,
                value: value,
            });
            yield tx.wait();
            const balance = yield provider.getBalance(randomWallet.address);
            expect(value.eq(balance)).toBeTruthy();
        }));
        it('should deploy erc20 and send token', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const provider = new ethers_1.ethers.providers.JsonRpcProvider(HTTP_JSON_RPC_PROVIDER);
            const wallet = new ethers_1.ethers.Wallet('0xa3dac6ca0b1c61f5f0a0b3a0acf93c9a52fd94e8e33d243d3b3a8b8c5dc37f0b').connect(provider);
            const erc20 = yield new ERC20Token__factory_1.ERC20Token__factory(wallet).deploy('Test token', 'tst', 18);
            yield erc20.deployed();
            const randomWallet = ethers_1.ethers.Wallet.createRandom();
            const mintTx = yield erc20.mint(wallet.address, ethers_1.ethers.utils.parseEther('500'));
            yield mintTx.wait();
            const transferValue = ethers_1.ethers.utils.parseEther('10');
            const transferTx = yield erc20.transfer(randomWallet.address, transferValue);
            yield transferTx.wait();
            const coinBalance = yield erc20.balanceOf(randomWallet.address);
            expect(coinBalance.gte(transferValue)).toBeTruthy();
        }));
    });
    describe('ws', function () {
        it('should check block number', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const provider = new ethers_1.ethers.providers.WebSocketProvider(WS_JSON_RPC_PROVIDER);
            const blockNumber = yield provider.getBlockNumber();
            expect(blockNumber).toBe(0);
        }));
        it('genesis accounts should have funds', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const provider = new ethers_1.ethers.providers.WebSocketProvider(WS_JSON_RPC_PROVIDER);
            const wallet = new ethers_1.ethers.Wallet('0xa3dac6ca0b1c61f5f0a0b3a0acf93c9a52fd94e8e33d243d3b3a8b8c5dc37f0b');
            const balance = yield provider.getBalance(wallet.address);
            expect(balance.gt(ethers_1.ethers.constants.Zero)).toBeTruthy();
        }));
        it('should be able to send funds', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const provider = new ethers_1.ethers.providers.WebSocketProvider(WS_JSON_RPC_PROVIDER);
            const wallet = new ethers_1.ethers.Wallet('0xa3dac6ca0b1c61f5f0a0b3a0acf93c9a52fd94e8e33d243d3b3a8b8c5dc37f0b').connect(provider);
            const randomWallet = ethers_1.ethers.Wallet.createRandom();
            const value = ethers_1.ethers.utils.parseEther('500');
            const tx = yield wallet.sendTransaction({
                to: randomWallet.address,
                value: value,
            });
            yield tx.wait();
            const balance = yield provider.getBalance(randomWallet.address);
            expect(value.eq(balance)).toBeTruthy();
        }));
        it('should deploy erc20 and send token', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const provider = new ethers_1.ethers.providers.WebSocketProvider(WS_JSON_RPC_PROVIDER);
            const wallet = new ethers_1.ethers.Wallet('0xa3dac6ca0b1c61f5f0a0b3a0acf93c9a52fd94e8e33d243d3b3a8b8c5dc37f0b').connect(provider);
            const erc20 = yield new ERC20Token__factory_1.ERC20Token__factory(wallet).deploy('Test token', 'tst', 18);
            yield erc20.deployed();
            const randomWallet = ethers_1.ethers.Wallet.createRandom();
            const mintTx = yield erc20.mint(wallet.address, ethers_1.ethers.utils.parseEther('500'));
            yield mintTx.wait();
            const transferValue = ethers_1.ethers.utils.parseEther('10');
            const transferTx = yield erc20.transfer(randomWallet.address, transferValue);
            yield transferTx.wait();
            const coinBalance = yield erc20.balanceOf(randomWallet.address);
            expect(coinBalance.gte(transferValue)).toBeTruthy();
        }));
    });
});
//# sourceMappingURL=TestNetwork.test.js.map