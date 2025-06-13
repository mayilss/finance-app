import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useLogin } from "../useLogin";

const dispatchMock = vi.fn();
const navigateMock = vi.fn();
const unwrapMock = vi.fn();

vi.mock("@app/hooks", () => ({
  useAppDispatch: () => dispatchMock,
}));
vi.mock("react-router-dom", () => ({
  useNavigate: () => navigateMock,
}));

describe("useLogin", () => {
  it("dispatches loginAsync and navigates on success", async () => {
    dispatchMock.mockReturnValue({ unwrap: unwrapMock });
    unwrapMock.mockResolvedValue(undefined);

    const { result } = renderHook(() => useLogin());
    const data = { username: "john", password: "0000" };

    await result.current(data);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(typeof dispatchMock.mock.calls[0][0]).toBe("function");
    expect(unwrapMock).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
