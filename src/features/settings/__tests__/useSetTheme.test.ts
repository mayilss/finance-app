import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useSetTheme } from "../useSetTheme";
import { setTheme } from "../slice";

const dispatchMock = vi.fn();

vi.mock("@app/hooks", () => ({
  useAppDispatch: () => dispatchMock,
}));

describe("useSetTheme", () => {
  it("dispatches setTheme", () => {
    const { result } = renderHook(() => useSetTheme());
    result.current("dark");
    expect(dispatchMock).toHaveBeenCalledWith(setTheme("dark"));
  });
});
