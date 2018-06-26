// State arugment is not application state, only the state this reducer is responsible for

export default class (state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
    }
  }
  return state;
}
