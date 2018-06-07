
var reviewLeftClicked = function (state, actions) {
  return (
    {
      reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  }
  )
}

var reviewRightClicked = function (state, actions) {
  return (
    {
      reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  }
  )
}

function intro(state, actions){
  console.log('Just ran my first action' )
  return (
    {count: state.count + 1}
  )
}

export const actions = {
  intro,
  reviewLeftClicked ,
  reviewRightClicked,
}
