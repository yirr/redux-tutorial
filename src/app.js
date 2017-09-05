import expect from 'expect'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

//作成したreducerであるcounter関数を引数に指定してstoreを作成
const store = createStore(counter);

//画面更新用の関数を作成
const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() =>
                store.dispatch({
                    type: 'INCREMENT'
                })}
            onDecrement={() =>
                store.dispatch({
                    type: 'DECREMENT'
                })}
        />,
        document.getElementById('root')
    )
}

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render);

//最初に画面を表示（0が表示される)
render();