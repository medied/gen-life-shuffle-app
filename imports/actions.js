const shuffleAction = (shuffledImages) => {
  return {
    type: 'SHUFFLE',
    order: shuffledImages
  }
}

export default shuffleAction
