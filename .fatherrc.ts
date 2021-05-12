export default {
  esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
  ],
};
