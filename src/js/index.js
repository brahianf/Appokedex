import React from 'react';
import ReactDom from 'react-dom';
import App from '@routes/App';
import ThemeContext from '@context/ThemeContext';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '@reducersRedux/rootReducer';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
    <Provider store={store}>
        <ThemeContext.Provider value="#1b2127">
            <App />
        </ThemeContext.Provider>
    </Provider>,
    document.getElementById('app')
);
