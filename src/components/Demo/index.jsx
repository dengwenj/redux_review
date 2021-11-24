import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'

export default function Demo() {
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
}
