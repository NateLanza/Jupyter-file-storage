import anywidget from '@anywidget/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import * as fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

const load = path =>
  JSON.parse(
    fs.readFileSync(path, {
      encoding: 'utf-8'
    })
  );

const entryPaths = {
  persist_output: {
    srcFileName: "frontend.ts",
    dir: ".",
    fileName: "frontend.js"
  }
};

const OUTPUT_DIR = './lib';

const joinPaths = (...paths) => path.join(...paths);

const sourceBasePath = (...filePath) =>
  joinPaths('./', ...filePath);

const baseConfig = {
  build: {
    outDir: OUTPUT_DIR,
    lib: {
      entry: Object.entries(entryPaths).reduce((acc, [k, v]) => {
        return {
          ...acc,
          [v.fileName]: sourceBasePath(v.dir, v.srcFileName)
        };
      }, {}),
      formats: ['es'],
      fileName: (_, name) => {
        return name;
      }
    },
    empytOutDir: true
  },
  rollupOptions: {
    output: {
      assetFileNames: assetInfo => {
        4;
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },  
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  plugins: [anywidget(), cssInjectedByJsPlugin()]
};

export function configCreator(entry = null, emptyOutDir = true) {
  if (!entry) return defineConfig(baseConfig);
  else
    return defineConfig({
      ...baseConfig,
      build: {
        ...baseConfig.build,
        lib: {
          entry: sourceBasePath(entry.dir, entry.srcFileName),
          fileName: () => {
            return entry.fileName;
          },
          formats: 'es'
        },
        rollupOptions: {
          output: {
            manualChunks: undefined,
            assetFileNames: '[name].[ext]'
          }
        },
        emptyOutDir
      }
    });
}

const defaultConfig = configCreator();

export default defaultConfig;
