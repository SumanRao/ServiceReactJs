let defaultState = {
  services: [],
  providers: [],
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "LOAD_SERVICE") {
    return {
      ...state,
      services: action.listServices,
    };
  } else if (action.type === "LOAD_PROVIDER") {
    return {
      ...state,
      providers: action.listProviders,
    };
  } else {
    return { ...state };
  }
};

export default mainReducer;
