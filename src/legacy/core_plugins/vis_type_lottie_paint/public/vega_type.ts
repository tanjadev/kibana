import { i18n } from '@kbn/i18n';
// @ts-ignore
import { DefaultEditorSize } from 'ui/vis/editor_size';
// @ts-ignore
import { defaultFeedbackMessage } from 'ui/vis/default_feedback_message';
// @ts-ignore
import { HoudiniVisualization } from './houdini_vis';
// @ts-ignore
import defaultSpec from '!!raw-loader!./default.spec.hjson';

export const createVegaTypeDefinition = () => {
  return {
    name: 'lottiePaintWorklet',
    title: 'HOUDINI: Lottie Paint Worklet',
    description: i18n.translate('visTypeVega.type.vegaDescription', {
      defaultMessage:
        'This is a prototype plugin that embeds a lottie Houdini Paint implementation.',
      description: 'This is a prototype plugin that embeds a lottie Houdini Paint implementation.',
    }),
    icon: 'visVega',
    visualization: HoudiniVisualization,
    requestHandler: 'none', //
    responseHandler: 'none', //
    options: {
      showIndexSelection: false,
      showQueryBar: true,
      showFilterBar: true,
    },
    stage: 'experimental',
  };
};
