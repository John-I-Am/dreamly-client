import loginService from '../services/login'
import dreamsService from '../services/dreams'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data
    case 'CLEAR_USER':
      window.localStorage.clear()
      return null
    case 'FROM_LOCAL':
      dreamsService.setToken(action.data.token)
      return action.data
    default:
      return state
  }
}

export const setUser = (user) => {
  return async dispatch => {
    try {
      const loggedUser = await loginService.login(user)
      dreamsService.setToken(loggedUser.token)
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(loggedUser)
      )  
      dispatch({
        type: 'SET_USER',
        data: loggedUser
      })
      return 1      
    } catch {
      return 2
    }
  }
}

export const registerUser = (user) => {
  return async dispatch => {
    try {
      await loginService.register(user)
      dispatch(setUser(user)) 
    } catch {
      return 1
    }
  }
}

export const setUserFromLocalStorage = (user) => {
  return {
    type: 'FROM_LOCAL',
    data: user
  }
}

export const clearUser = () => {
  return {
    type: 'CLEAR_USER'
  }
}

export default userReducer