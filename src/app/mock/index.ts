import {crises, heroes} from './mock-data';

export default {
  'GET heroes': (req) => {
    return heroes;
  },

  'GET crises': (req) => {
    return crises;
  },

  'POST test/update': (req) => {
    return {
      msg: 'SUCCESS',
      data: null
    };
  }
};
