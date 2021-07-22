import { atom } from "recoil";

export const menuAtom = atom({
  key: "menuAtom", // unique ID (with respect to other atoms/selectors)
  default: {
    menu: "",
    id: "",
    hc: "",
    date: "",
    extra: [{}],
  }, // default value (aka initial value)
});

export const qrCode = atom({
  key: "qrCode", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const centerSelected = atom({
  key: "centerSelected", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const positionSelected = atom({
  key: "positionSelected", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
