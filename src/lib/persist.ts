import { type PreloadedState, type RootState } from "@app/store";
import { debounce } from "./debounce";

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    debounce(() => {
      localStorage.setItem("state", serializedState);
    }, 300)();
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

export function loadState(): PreloadedState | undefined {
  if (
    typeof window === "undefined" ||
    typeof window.localStorage === "undefined"
  ) {
    return undefined;
  }
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
}
