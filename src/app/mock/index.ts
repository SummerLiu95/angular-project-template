import { heroes } from './mock-data';

export default {
  'GET heroes': (req) => {
    return heroes;
  },

  'POST test/update': (req) => {
    return {
      code: 200,
      msg: 'SUCCESS',
      data: null
    };
  }
};
