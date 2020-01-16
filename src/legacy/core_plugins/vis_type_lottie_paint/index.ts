import { resolve } from 'path';
import { Legacy } from 'kibana';

import { LegacyPluginApi, LegacyPluginInitializer } from '../../../../src/legacy/types';

const houdiniPluginInitializer: LegacyPluginInitializer = ({ Plugin }: LegacyPluginApi) =>
  new Plugin({
    id: 'houdini',
    require: ['kibana', 'elasticsearch'],
    publicDir: resolve(__dirname, 'public'),
    uiExports: {
      hacks: [resolve(__dirname, 'public/legacy')],
    },
    init: (server: Legacy.Server) => ({}),
    config(Joi: any) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  } as Legacy.PluginSpecOptions);

// eslint-disable-next-line import/no-default-export
export default houdiniPluginInitializer;
