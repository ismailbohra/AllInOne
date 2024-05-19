import * as types from "./ToasterTypes";

export const showToasterAction = (message, toasterType) => {
  console.log("show toaster action")
  return {
    type: types.SHOW_TOASTER,
    message,
    toasterType,
  };
};

export const hideToasterAction = () => {
  return {
    type: types.HIDE_TOASTER,
  };
};
