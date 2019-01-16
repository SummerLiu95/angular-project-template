import * as Mock from 'mockjs';

export const heroes = Mock.mock({
  'code': '@integer(0,5)',
  'msg': '@sentence(0, 9)',
  'data': {
    'total': 40,
    'list|10': [{
      'name': '@first @last',
      'id': '@integer(0, 100)'
    }],
    'pageNum': 1,
    'pageSize': 10
  }
});
