import ts from 'rollup-plugin-typescript2';

export default {
  input: ['src/index.ts', 'src/atoms/Color/index.ts'],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [ts()],
  external: ['react'],
};
