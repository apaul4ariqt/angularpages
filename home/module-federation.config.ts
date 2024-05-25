import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'home',
  exposes: {
    './Routes': 'home/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
