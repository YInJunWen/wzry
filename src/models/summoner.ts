import { Effect, Reducer, request, Subscription } from 'umi';

export interface SummonerModelState {
  name: string;
  summoner: Array<object>;
}

export interface SummonerModelType {
  namespace: 'summoner';
  state: SummonerModelState;
  effects: {
    fetch: Effect;
  };
  reducers: {
    save: Reducer<SummonerModelState>;
  };
  subscriptions: {
    setup: Subscription
  }
}

const SummonerModel: SummonerModelType = {
  namespace: 'summoner',

  state: {
    name: 'summoner',
    summoner: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // const data = yield request('/herolist.json');
      // const localData = [
      //   {
      //     ename: 105,
      //     cname: '廉颇',
      //     title: '正义爆轰',
      //     new_type: 0,
      //     hero_type: 3,
      //     skin_name: '正义爆轰|地狱岩魂',
      //   },
      //   {
      //     ename: 106,
      //     cname: '小乔',
      //     title: '恋之微风',
      //     new_type: 0,
      //     hero_type: 2,
      //     skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
      //   },
      // ];
      // yield put({
      //   type: 'save',
      //   payload: {
      //     summoner: data || localData
      //   }
      // })
      const data = yield request('/herolist.json');
      const localData = [
        {
          ename: 105,
          cname: '廉颇',
          title: '正义爆轰',
          new_type: 0,
          hero_type: 3,
          skin_name: '正义爆轰|地狱岩魂',
        },
        {
          ename: 106,
          cname: '小乔',
          title: '恋之微风',
          new_type: 0,
          hero_type: 2,
          skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
        },
      ];
      yield put({
        type: "save",
        payload: {
          summoner: data || localData
        }
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/summoner') {
          dispatch({
            type: 'fetch'
          })
        }
      });
    }
  }
};

export default SummonerModel;