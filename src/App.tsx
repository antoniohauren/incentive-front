import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BalanceCreatePage from "./pages/balance-create-page";
import BalancesPage from "./pages/balance-page";
import BalanceUpdatePage from "./pages/balance-update-page";
import PaymentsCreatePage from "./pages/payment-create-page";
import PaymentsPage from "./pages/payment-page";
import PaymentsUpdatePage from "./pages/payment-update-page";
import { SignInPage } from "./pages/sign-in-page";
import { SignUpPage } from "./pages/sign-up-page";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <PaymentsPage />,
      },
      {
        path: "auth",
        children: [
          { path: "entrar", element: <SignInPage /> },
          { path: "cadastrar", element: <SignUpPage /> },
        ],
      },
      {
        path: "pagamentos",
        children: [
          {
            index: true,
            element: <PaymentsPage />,
          },
          {
            path: "novo",
            element: <PaymentsCreatePage />,
          },
          {
            path: ":id",
            element: <PaymentsUpdatePage />,
          },
        ],
      },
      {
        path: "saldos",
        children: [
          {
            index: true,
            element: <BalancesPage />,
          },
          {
            path: "novo",
            element: <BalanceCreatePage />,
          },
          {
            path: ":id",
            element: <BalanceUpdatePage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
