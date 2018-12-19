import * as Mock from 'mockjs';

export const players = Mock.mock({
  'code': '@integer(0,5)',
  'msg': '@sentence(0, 9)',
  'data': {
    'total': 40,
    'list|10': [{
      'name': '@first @last',
      'age': '@integer(0, 100)',
      'address': '@county(true)',
      'email': '@EMAIL'
    }],
    'pageNum': 1,
    'pageSize': 10
  }
});
