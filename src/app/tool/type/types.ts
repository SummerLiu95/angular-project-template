export interface PlayersListItemType {
  name: string;
  age: number;
  address: string;
  email: string;
}

export interface PlayersListResponseType<T = any> {
  total: number;
  list: Array<T>;
  pageNum: number;
  pageSize: number;
}
