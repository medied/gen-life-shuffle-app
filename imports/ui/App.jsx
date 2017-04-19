import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import Shuffle from './Shuffle';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Index Page</h1>
        <Shuffle store={this.props.route.store}/>
        <Link to="/other">Go to other page</Link>
      </div>
    );
  }
} 

App.propTypes = {
  store: PropTypes.object,
};
