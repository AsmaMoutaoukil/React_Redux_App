

const initialState = {
    showimage: false,
}


function rootReducers(state = initialState, action) {
  switch (action.type) {

    case "DISPLAYIMAGE":
      return{
        ...state,
        showimage: !state.showimage,
      }

    default:
      return state;

  }
}



export default rootReducers