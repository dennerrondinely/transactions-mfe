import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import fs from 'fs';

const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default env => {
  const {
    mode = 'development',
    context = Repack.getDirname(import.meta.url),
    platform = process.env.PLATFORM,
    devServer = undefined,
    bundleFilename = undefined,
    sourceMapFilename = undefined,
    assetsPath = undefined,
  } = env;

  if (!platform) {
    throw new Error('Missing platform');
  }

  process.env.BABEL_ENV = mode;

  return {
    context: __dirname,
    entry: './index.js',
    resolve: {
      ...Repack.getResolveOptions(),
    },
    module: {
      rules: [
        ...Repack.getJsTransformRules(),
        ...Repack.getAssetTransformRules()
      ],
    },
    plugins: [
      new Repack.RepackPlugin({
        context,
        mode,
        platform,
        devServer,
        output: {
          bundleFilename,
          sourceMapFilename,
          assetsPath,
        },
      }),
      new Repack.plugins.ModuleFederationPluginV2({
        name: 'Transactions',
        filename: 'Transactions.container.bundle',
        dts: false,
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
    ],
  };
};
