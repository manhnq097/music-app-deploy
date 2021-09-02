const initialState = localStorage.getItem('toggleSidebar') || true;

const myReducer = (state = initialState, action) => {
  state = JSON.parse(state);
  if (action.type === 'TOGGLE_SIDEBAR') {
    state = !state;
    localStorage.setItem('toggleSidebar', state);
    return state
  }
  return state;
}

export default myReducer;