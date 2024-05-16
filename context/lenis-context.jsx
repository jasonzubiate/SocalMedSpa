"use client";

import { ReactLenis } from "lenis/react";

function LenisContext({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisContext;
