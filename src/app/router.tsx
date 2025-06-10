import { withAuthenticationRequired } from "@auth0/auth0-react";
import Layout from "@components/layout/Layout";
import Spinner from "@components/ui/Spinner";
import LoginPage from "@pages/LoginPage";
import NotFoundPage from "@pages/NotFoundPage";
import SettingsPage from "@pages/SettingsPage";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const DashboardPage = React.lazy(() => import("@pages/DashboardPage"));
const TransactionsPage = React.lazy(() => import("@pages/TransactionsPage"));
const DebtsPage = React.lazy(() => import("@pages/DebtsPage"));

const PrivateLayout = withAuthenticationRequired(Layout, {
  onRedirecting: () => <Spinner />,
});

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <DashboardPage />
          </Suspense>
        ),
      },

      {
        path: "/transactions",
        element: (
          <Suspense fallback={<Spinner />}>
            <TransactionsPage />
          </Suspense>
        ),
      },
      {
        path: "/debts",
        element: (
          <Suspense fallback={<Spinner />}>
            <DebtsPage />
          </Suspense>
        ),
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
