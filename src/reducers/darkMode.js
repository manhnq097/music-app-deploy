const initialState = localStorage.getItem('toggleDarkMode') || false;

const myReducer = (state = initialState, action) => {
  state = JSON.parse(state)
  if (action.type === 'TOGGLE_DARKMODE') {
    state = !state;
    localStorage.setItem('toggleDarkMode', state);
    return state
  }
  return state;
}

export default myReducer;