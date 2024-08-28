import { CLEAR_FORM_DATA, SAVE_FORM_DATA } from "./formTypes";

const initialState = {
  formData: {
    username: "",
    email: "",
    password: "",
  },
};
const staticPassword = "mod7ReactUSIP";

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORM_DATA: {
      if (action.payload.password === staticPassword) {
        return {
          ...state,
          formData: action.payload,
        };
      }
      return state;
    }
    case CLEAR_FORM_DATA:
      return {
        ...state,
        formData: initialState.formData,
      };
    default:
      return state;
  }
};

export default formReducer;
