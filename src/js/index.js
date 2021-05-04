import React from 'react';
import ReactDom from 'react-dom';
import App from '@routes/App';
import ThemeContext from '@context/ThemeContext';


ReactDom.render(
    <ThemeContext.Provider value="#1b2127">
        <App />
    </ThemeContext.Provider>,
    document.getElementById('app')
);
