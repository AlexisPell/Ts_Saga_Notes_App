import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import notes from './notes'

const rootReducer = combineReducers({ alert, auth, notes })

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
