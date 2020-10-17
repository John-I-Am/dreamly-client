const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN':
      return true
    case 'CLOSE':
      return false
    default:
      return state
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE'
  }
}

export const openModal = () => {
  return {
    type: 'OPEN'
  }
}

export default modalReducer