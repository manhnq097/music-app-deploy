const initialState = localStorage.getItem('language') || 'vi';

const myReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_LANGUAGE') {
    if (action.language === state) return state;
    switch (action.language) {
      case 'vi':
        state = 'vi'
        break
      case 'en':
        state = 'en'
        break
      default:
        state = localStorage.getItem('language') || 'vi';
        break
    }
    localStorage.setItem('language', state);
    return state;
  }
  return state;
}

export default myReducer;