import { players } from './mock-data';

export default {
  'GET players': (req) => {
    return players;
  },

  'POST test/update': (req) => {
    return {
      code: 200,
      msg: 'SUCCESS',
      data: null
    };
  }
};
