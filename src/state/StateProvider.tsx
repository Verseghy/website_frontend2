import { createContext, ParentComponent } from 'solid-js'
import { Store } from 'solid-js/store'
import { homeState } from './home'

export type State = {
  homeState: ReturnType<typeof homeState>
}

export const StateContext = createContext<Store<State>>()

const StateProvider: ParentComponent = (props) => {
  const state: State = {
    homeState: homeState(),
  }

  return <StateContext.Provider value={state}>{props.children}</StateContext.Provider>
}

export default StateProvider
