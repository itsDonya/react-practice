export const initialState = {
  name: "Donya",
};

export const profileReducer = (state, action) => {
  // action: { type: ..., payload: ...}

  switch (action.type) {
    case "submit_name":
      return { name: action.payload };
    //   return { ...state, name: action.payload };

    default:
      return state;
  }
};
