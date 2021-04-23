[![TypeScript version][ts-badge]][typescript-4-2]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - Travis][travis-badge]][travis-ci]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

Just a wrapper around [hardhat-network](https://github.com/nomiclabs/hardhat/blob/767f68dee84d6a47cd40153a8ab8552f41a95d5e/packages/hardhat-core/test/internal/hardhat-network/helpers/useProvider.ts)

## NPM

```
npm i --save-dev ethereum-test-network
```

## Yarn

```
yarn add --dev ethereum-test-network
```

## Use its

```ts
import { TestNetwork } from 'ethereum-test-network';

describe('eth test network', () => {
  let testnetwork: TestNetwork;

  // Act before assertions
  beforeEach(async () => {
    testnetwork = await TestNetwork.init();
  });
  afterEach(async () => {
    await testnetwork.close();
  });

  it('should check block number', async () => {
    const provider = new ethers.providers.JsonRpcProvider(JSON_RPC_PROVIDER);
    const blockNumber = await provider.getBlockNumber();
    expect(blockNumber).toBe(0);
  });
});
```

## Defaults

```
const DEFAULT_CHAIN_ID = 123;
const DEFAULT_NETWORK_ID = 234;
const DEFAULT_GENESIS_ACCOUNTS = [
  {
    balance: '0x295BE96E64066972000000',
    privateKey:
      '0xa3dac6ca0b1c61f5f0a0b3a0acf93c9a52fd94e8e33d243d3b3a8b8c5dc37f0b', // 0xaaE062157B53077da1414ec3579b4CBdF7a4116f
  },
  {
    balance: '0x295BE96E64066972000000',
    privateKey:
      '0xfc6e27fbc1cc2eb3f04dab6259d926280d4aa8acb8c83f3de506ab9d589d6cc2', // 0xbbDBFf23Df1e064f458aCd943E48179bD3271fA0
  },
  {
    balance: '0x295BE96E64066972000000',
    privateKey:
      '0x735e4ab2cd08798dee1a5fc3a7af4bbdeece90c7dbdf878ceec556c84bd5ec88', // 0xcc5a0dc5152D368D55A10f68f874A05A4dd65bee
  },
];
const DEFAULT_JSON_RPC_PORT = 8545;
const DEFAULT_BLOCK_GAS_LIMIT = 6000000;
```

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## Additional Informations

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.2-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2014.16-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[travis-badge]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate.svg?branch=main
[travis-ci]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate
[gha-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fjsynowiec%2Fnode-typescript-boilerplate%2Fbadge&style=flat
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions
[typescript]: https://www.typescriptlang.org/
[typescript-4-2]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467?s=20
[gh-actions]: https://github.com/features/actions
[travis]: https://travis-ci.org
[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
