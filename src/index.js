//document.getElementById('app').innerHTML ="Webpack works"
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/Hello';

import {AppContainer} from 'react-hot-loader';

import getRouter from './router/router';

renderWithHotReload(getRouter());
if(module.hot)
{
    module.hot.accept('./router/router',()=>{
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}
function renderWithHotReload(RootElment) {
    ReactDom.render(
        <AppContainer>
            {RootElment}
        </AppContainer>,
        document.getElementById('app')
    )

}
// ReactDom.render(
//     getRouter() ,document.getElementById('app')
// );
