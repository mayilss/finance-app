import type { RootState } from "@app/store";
import renderWithRedux from "@lib/render-with-redux";
import DashboardPage from "@pages/DashboardPage";
import { cleanup, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

afterEach(cleanup);

type DashboardTestRootState = Pick<RootState, "transactions">;

describe("DashboardPage", () => {
  it("should render the Net Balance", () => {
    const preloadedState: DashboardTestRootState = {
      transactions: {
        "1": {
          id: "1",
          label: "A",
          amount: 100,
          date: "2024-01-01",
          type: "income",
        },
        "2": {
          id: "2",
          label: "B",
          amount: 50,
          date: "2024-01-02",
          type: "expense",
        },
      },
    };

    renderWithRedux(<DashboardPage />, {
      preloadedState,
    });
    const netBalanceElement = screen.getByRole("heading");

    expect(netBalanceElement.innerText).toBe("Net Balance: $50.00");
  });

  it("should lazy load Chart", async () => {
    const { container } = renderWithRedux(<DashboardPage />);

    const loadingElement = screen.getByText("Loading chart...");
    const chartElement = container.querySelector("[data-testId=chart]");

    expect(loadingElement).toBeDefined();

    await waitFor(() => {
      expect(chartElement).toBeDefined();
    });
  });
});
