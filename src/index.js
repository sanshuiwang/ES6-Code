import React from 'react'
import ReactDom from 'react-dom'

import {Provider} from 'react-redux'
import store from './redux/store'

//BrowserRouter 自定义history的节点的时候直接导入route
import {Router} from 'react-router-dom'
import App from './components/App'

import './index.scss'

//自创建history
import history from './router/history/history'

import NormalizeCss from './components/NormalizeCss'

//let const 学习时代码测试，可以直接运行，也可以放在浏览器console下边跑
import './ES/LetConst/01.js'

/*Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听*/
ReactDom.render(
  <div>
    <NormalizeCss />
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </div>,
  document.getElementById('app'));
