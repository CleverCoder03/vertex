"use client"
import {ReactLenis} from "lenis/react"
import { ReactNode } from "react";

interface LenisScrollProviderProps {
  children: ReactNode;
}

const LenisScrollProvider = ({children}: LenisScrollProviderProps) => {
  return (
    <ReactLenis root>
        {children}
    </ReactLenis>
  )
}

export default LenisScrollProvider