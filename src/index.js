import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import store from './store';
// import { STORY_ARCHIVE } from './constants/actionTypes';
// import { getReadableStories } from './selectors/storySelector';
// import { doArchiveStory } from './actions/archive';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

// const stories = [
//   {
//   title: 'React',
//   url: 'https://facebook.github.io/react/',
//   author: 'Jordan Walke',
//   num_comments: 3,
//   points: 4,
//   objectID: 0,
//   }, {
//   title: 'Redux',
//   url: 'https://github.com/reactjs/redux',
//   author: 'Dan Abramov, Andrew Clark',
//   num_comments: 2,
//   points: 5,
//   objectID: 1,
//   },
//   ];


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
