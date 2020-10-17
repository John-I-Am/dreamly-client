import dreamService from '../services/dreams'

const dreamReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_DREAMS':
      return action.data
    case 'NEW_DREAM':
      return state.concat(action.data)
    case 'DELETE_DREAM':
      return state.filter(dream => dream.id !== action.data)
    case 'CLEAR_DREAMS_ON_LOGOUT':
      return []
    default:
      return state
  }
}

export const initializeDreams = () => {
  return async dispatch => {
    const dreams = await dreamService.getAll()
    dispatch({
      type: 'INIT_DREAMS',
      data: dreams,
    })
  }
}

export const createDream = (dream) => {
  return async dispatch => {
    const newDream =  await dreamService.create(dream)
    dispatch({
      type: 'NEW_DREAM',
      data: newDream
    })
  }
}

export const deleteDream = (id) => {
  return async dispatch => {
    await dreamService.remove(id)
    dispatch({
      type: 'DELETE_DREAM',
      data: id     
    })
  }
}

export const clearDreamsOnLogout = () => {
  return {
    type: 'CLEAR_DREAMS_ON_LOGOUT'
  }

}

export default dreamReducer