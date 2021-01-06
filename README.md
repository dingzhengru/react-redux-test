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
