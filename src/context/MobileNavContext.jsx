import { createContext, useContext, useState } from "react";

const mobileNavContext = createContext();

function MobileNavProvider({ children }) {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  return (
    <mobileNavContext.Provider
      value={{
        isMobileNavActive,
        setIsMobileNavActive,
      }}
    >
      {children}
    </mobileNavContext.Provider>
  );
}
function useMobileNav() {
  const context = useContext(mobileNavContext);
  if (context === undefined) {
    throw new Error("useMobileNav must be used within a MobileNavProvider");
  }
  return context;
}
export { MobileNavProvider, useMobileNav };
