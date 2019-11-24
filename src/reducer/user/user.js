const initialState = {
  isAuthorize: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};


const ActionCreator = {
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorize: action.payload});
  }
  return state;
};


export {
  ActionCreator,
  ActionType,
  reducer
};
