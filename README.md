# redux中使用useSelector、useDispatch替代connect

与 一样`connect()`，应该首先将整个应用程序包装在一个`<Provider>`组件中，以使存储在整个组件树中可用

```jsx
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

``useSelector``

主要作用： 从`redux`的`store`对象中提取数据(`state`)

```jsx
const zState = useSelector(state => state)
```

`useState`

```jsx
const store = useStore()
```

这个`Hook`返回`redux` `<Provider>`组件的`store`对象的引用

`useDispatch`

主要作用：就是操作状态的方法

```jsx
    const state = useSelector(state => state) // 就是用来获取状态的
    const dispatch = useDispatch() // 用来操作状态的方法 
    const store = useStore()
    console.log(store);
    console.log(dispatch);
    console.log(state);

    const headleClick = () => {
        dispatch({type:'dwj', data:'dwj and weiwei'})
    }

    return (
        <div>
            <h3>{state.countReducer}</h3>
            <button onClick={headleClick}>点击</button>
        </div>
    )		
```

### useSelector

* useSelector 第二个参数没传，即使当前组件数据没有变也会重新渲染组件，因为 useSelector 每次都会执行，返回的对象是不一样的。
* 第二个参数是函数，比较的是返回值（第一个参数的返回值，前一次与这一次）的相不相等

```JS
// 比较的是第一个参数的返回值是否一样 newSelectedState, latestSelectedState.current
// 一样就不执行后面了。 useSelectore 不写第二个参数永远不一样，因为每次执行函数都会返回新的对象
if (equalityFn(newSelectedState, latestSelectedState.current)) {
	return
}
// useSelectore 不写第二个参数永远不一样，因为每次执行函数都会返回新的对象，这就会导致项目里面写了多少个 useSelector 就会重新渲染多少次 ！！！！！！！！！8
// 写了第二个参数的话，就会确定组件里面依赖的数据有没有变化，没有变化不会重新渲染

// 返回值不一样的情况   
latestSelectedState.current = newSelectedState
latestStoreState.current = newStoreState
```
