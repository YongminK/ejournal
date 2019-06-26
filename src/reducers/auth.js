const initialState = {
    type: 'LOGIN'
  }
  
  export default function auth(state = initialState, action) {

    switch (action.type) {
      case 'LOGOUT':
        return { type: 'LOGIN' }; 
      default:
        return state;
    }
  
  }