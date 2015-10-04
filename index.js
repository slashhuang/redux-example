/**
 * Created by slashhuang on 15/10/4.
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

let store = createStore(todoApp);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
        console.log(store.getState())
);

let rootElement = document.getElementById('app');
React.render(
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
<Provider store={store}>
    {() => <App />}
</Provider>,
    rootElement
);

/**下面的代码仅仅是官网的测试代码，用于测试redux是否成功实现
// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
//store.dispatch(addTodo('Learn about store'));
//store.dispatch(completeTodo(0));
//store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter('hello world'));

// Stop listening to state updates
unsubscribe();
 */