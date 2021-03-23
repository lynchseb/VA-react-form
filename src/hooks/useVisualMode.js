import { useState } from "react";

export default function useVisualMode(initialViewMode){
  const [mode, setMode] = useState(initialViewMode)

  function home(newMode){
    setMode(newMode)
  }

  function account(newMode){
    setMode(newMode)
  }
  function register(newMode){
    setMode(newMode)
  }

 return { mode, home, account, register}
}

