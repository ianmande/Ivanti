import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://mock.shop/api',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      schema: 'src/api',
      preset: 'client',
      plugins: ['typescript'],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        onlyFields: ['products', 'collections', 'variants'],
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
