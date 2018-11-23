import * as Mock from 'mockjs';
import { Random } from 'mockjs';

const mockPlayers = Mock.mock({
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'name': '@first @last',
    'age': '@integer(0, 100)',
    'address': '@county(true)',
    'email': '@EMAIL'
  }]
});
export const players = mockPlayers.list;
