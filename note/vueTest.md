# Vue Test Utils + Jest

## 初始配置

jest.conf.js

```js
const path = require('path');

module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@utils/(.*)$': '<rootDir>/src/public/utils/$1',
    '^@router/(.*)$': '<rootDir>/src/public/router',
  },
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  // mapCoverage: true,
  // 生成结果
  coverageDirectory: '<rootDir>/test/unit/coverage',
  // 覆盖率搜集
  // collectCoverageFrom: [
  //   'src/**/*.{js,vue}',
  //   '!src/main.js',
  //   '!src/router/index.js',
  //   '!**/node_modules/**',
  // ],
};
```

setup.js
```js
import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI, { size: 'small' });

Vue.config.productionTip = false;

```

## 组价测试

utils.js(工具类)

```js
const $common = {
  isEmpty: value => [undefined, null, ''].includes(value),
};

export const getWrapper = (Cmp, options) => mount(Cmp, options);

export const getWrapperWithCommon = (Cmp, options = {}) => getWrapper(Cmp, {
  ...options,
  mocks: {
    $common,
    ...options.$common,
  },
});

export const getVm = (Cmp, options) => getWrapper(Cmp, options).vm;

export const getVmWithCommon = (Cmp, options = {}) => getWrapperWithCommon(Cmp, options).vm;
```

input.spec.js

```js
describe('input-number', () => {
  it('create default', () => {
    const vm = getVmWithCommon(InputNumber);

    expect(vm.controls).toEqual(false);
    expect(vm.innerValue).toEqual(undefined);
  });

  it('create value=abc', () => {
    const vm = getVmWithCommon(InputNumber, {
      propsData: {
        value: 'abc',
      },
    });

    expect(vm.innerValue).toEqual(NaN);
  });

  it('input change', (done) => {
    const warapper = getWrapperWithCommon(InputNumber);

    const vm = warapper.vm;

    wrapper.find('input').setValue('abc');

    expect(vm.innerValue).toEqual(undefined);
  });
});
```