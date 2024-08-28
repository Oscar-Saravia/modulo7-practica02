import { CLEAR_FORM_DATA, SAVE_FORM_DATA } from "./formTypes";

export const saveFormData = (formData) => {
  return {
    type: SAVE_FORM_DATA,
    payload: formData,
  };
};

export const clearFormData = () => ({
  type: CLEAR_FORM_DATA,
});