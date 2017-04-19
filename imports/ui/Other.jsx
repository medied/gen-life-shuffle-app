import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import Shuffle from './Shuffle';


export default class Other extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Other page</h1>
        <Shuffle store={this.props.route.store}/>
        <Link to="/index">Go to index page</Link>
      </div>
    );
  }
} 

Other.propTypes = {
  store: PropTypes.object,
};
