const initialState = ['http://i.imgur.com/xpVgjRo.jpg', 'http://i.imgur.com/R45mH67.jpg', 'http://i.imgur.com/dUUms18.jpg'];

const imagesOrder = (state = initialState, action) => {
  switch (action.type) {
    case 'SHUFFLE':
      return action.order
    default:
      return state
  }
}

export default imagesOrder
