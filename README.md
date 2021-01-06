# react-redux-test

**使用 hooks + react-redux**

> note: 很多舊文章是用 class + connect 的方式，要注意別搞混用法

參考文章:

- [Redux 觀念初探](https://ithelp.ithome.com.tw/articles/10250232)
- [React Redux 與 Hooks](https://ithelp.ithome.com.tw/articles/10251966)

跟 vue 的 vuex 一樣是全局狀態管理，但有些地方不同
參考: [Vuex 與 Redux 比較](https://lq782655835.github.io/blogs/react/diff-vuex-redux.html)

## Redux

### combineReducers

串接多個 reducer，並讓各自有自己的 namespace

```js
// 這段就會多出一個 counter 的 namespace => state.counter
combineReducers({ counter: counterReducer });
```

### createStore

單純就創建個 store

```js
// 單個
createStore(counterReducer);

// 多個
createStore(combineReducers({ counter: counterReducer }));
```

## Hooks

參考: [官方](https://react-redux.js.org/api/hooks)

### useSelector

單純用於取值，不準從這直接變更

等同於 vuex 的 getters

### useDispatch

呼叫事先定義在 reducer 的方法，只能從這裡操作值

等同於 vuex 的 mutation + dispatch

## middleware

參考: [詳解 Redux Middleware](https://max80713.medium.com/%E8%A9%B3%E8%A7%A3-redux-middleware-efd6a506357e)
redux 的非同步資料處理，需使用到 middleware，現有套件可以選擇: redux-thunk、redux-saga

在執行 reducer 之前會先進入 middleware，簡單來說，就是攔截 dispatch(action)

**不過現在非同步可以直接在 useEffect 裡面使用即可，並不一定要在 redux 裡面處理**
畢竟 redux 的非同步處理有點過於複雜，還需另外了解 middleware 的用法
