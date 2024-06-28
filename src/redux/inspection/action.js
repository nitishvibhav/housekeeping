import * as source from './source';


export const postInspectionDetails = (req) => {
    return {
      type: 'POST_INSPECTION',
      payload: source.postInspection(req),
    };
  };