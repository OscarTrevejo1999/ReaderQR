import { atom } from "recoil";

export const menu = atom({
  key: "menu", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const menuSoapCall = atom({
  key: "menuSoapCall", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
export const idPlato = atom({
  key: "idPlato", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const token = atom({
  key: "token", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const user = atom({
  key: "user", // unique ID (with respect to other atoms/selectors)
  // default: "", // default value (aka initial value)
  default: "", // default value (aka initial value)
});
