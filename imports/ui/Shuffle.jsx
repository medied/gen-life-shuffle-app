import React, { Component, PropTypes } from 'react';
import shuffleAction from '../actions.js';

const shuffle = require('shuffle-array');

export default class Shuffle extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      images: this.props.store.getState()
    };

    this.onShuffleClick = this.onShuffleClick.bind(this);

    // Subscribe to store
    this.unsubscribe = this.props.store.subscribe(() => {
      this.setState({
        images: this.props.store.getState()
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onShuffleClick () {
    // First, shuffle images array using the Fisher-Yates algorithm
    shuffle(this.state.images);

    // Then dispatch action
    this.props.store.dispatch(shuffleAction(this.state.images));
  }

  render() {
    return (
      <div>
        {this.state.images.map((image, index) => (<img src={image} key={index} />))}
        <button onClick={this.onShuffleClick}>Shuffle</button>
      </div>
    );
  }
}

Shuffle.propTypes = {
  store: PropTypes.object,
};
