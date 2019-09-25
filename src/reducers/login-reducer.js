const loginReducer = (state = 0, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state
    case "DECREMENT":
      return state - action.payload
    default:
      return state
  }
}

export default loginReducer
