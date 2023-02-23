// NavigationContext.js

import { createContext } from "react";

const NavigationContext = createContext({
  isActive: false,
  toggleActive: () => {},
});

export default NavigationContext;
