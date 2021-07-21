import { atom } from "recoil";

export const menuAtom = atom({
  key: "menuAtom", // unique ID (with respect to other atoms/selectors)
  default: {
    menu: "",
    id: "",
    hc: "",
    date: "",
    extra:[{}]
  }, // default value (aka initial value)
});
