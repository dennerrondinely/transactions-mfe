import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import rspack from '@rspack/core';

import pkg from './package.json' with {type: 'json'}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default env => {
  const { mode, platform = process.env.PLATFORM } = env;

  return {
    context: __dirname,
    entry: './index.js',
    resolve: {
      ...Repack.getResolveOptions(),
    },
    module: {
      rules: [
        ...Repack.getJsTransformRules(),
        ...Repack.getAssetTransformRules(),
      ],
    },
    plugins: [
      new Repack.RepackPlugin(),
      new Repack.plugins.ModuleFederationPluginV2({
        name: 'transactions',
        filename: 'transactions.container.js.bundle',
        dts: {
          consumeTypes: false,
          generateTypes: {
            generateAPITypes: true
          },
          tsConfigPath: './tsconfig.json'
        },
        remotes: {
          store: `host@http://localhost:8081/${platform}/host.container.js.bundle`,
        },
        exposes: {
          './Transactions': './src/screens/Transactions',
        },
        shared: Object.fromEntries(
          Object.entries(pkg.dependencies).map(([dep, { version }]) => {
            return [
              dep,
              { singleton: true, eager: true, requiredVersion: version },
            ];
          }),
        ),
      }),
      new rspack.IgnorePlugin({
        resourceRegExp: /^@react-native-masked-view/,
      }),
    ],
  };
};
