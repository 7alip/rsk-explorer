import Vue from 'vue'
export const SOCKET_CONNECTION = (state, connected) => {
  state.socketConnected = connected
  state.socketConnectionStart = (connected) ? Date.now() : 0
  state.socketConnectionEnd = (!connected) ? Date.now() : 0
}

export const SOCKET_ERROR = (state, error) => {
  error.clientTime = Date.now()
  state.socketErrors.push(error)
}

export const SET_DATE_INTERVAL = (state, interval) => {
  state.dateInterval = interval
}

export const SET_DATE = (state, date) => {
  date = date || Date.now()
  Vue.set(state, 'date', date)
}

export const SET_SIZE = (state, size) => {
  Vue.set(state.size, 'w', size.w)
  Vue.set(state.size, 'h', size.h)
}

export const CONFIG_LOAD_DONE = (state) => {
  state.loadingConfig = false
}

// dummy mutation for localStorage plugin
export const CONFIG_LOAD = (state) => {
  state.loadingConfig = true
}
