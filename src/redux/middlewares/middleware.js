import {createLogger} from 'redux-logger'
import promise from 'redux-promise-middleware'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const middleware = []

if (__DEV__) {
    middlewares.push(createLogger());
  }
  export default middlewares;