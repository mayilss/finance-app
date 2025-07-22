import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@app/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export function useAriaLive() {
  const [message, setMessage] = React.useState("");

  const announce = React.useCallback((msg: string) => {
    setMessage("");
    requestAnimationFrame(() => {
      setMessage(msg);
    });
  }, []);

  const LiveRegion = () => (
    <div aria-live="polite" role="status" className="sr-only">
      {message}
    </div>
  );

  return { announce, LiveRegion };
}
