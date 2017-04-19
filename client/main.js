import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Meteor } from 'meteor/meteor';
import imagesOrder from '../imports/reducers.js';
import Root from '../imports/ui/Root';

let store = createStore(imagesOrder);

Meteor.startup(() => {
  render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
