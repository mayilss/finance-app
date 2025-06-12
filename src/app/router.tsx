import { createBrowserRouter } from "react-router-dom";
import SettingsPage from "@pages/SettingsPage";
import Layout from "@components/layout/Layout";
import React, { Suspense } from "react";
import Spinner from "@components/ui/Spinner";
import LoginPage from "@pages/LoginPage";
import ProtectedRoute from "@components/ProtectedRoute";
import NotFoundPage from "@pages/NotFoundPage";

const DashboardPage = React.lazy(() => import("@pages/DashboardPage"));
const TransactionsPage = React.lazy(() => import("@pages/TransactionsPage"));
const DebtsPage = React.lazy(() => import("@pages/DebtsPage"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
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
