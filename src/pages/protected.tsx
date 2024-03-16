import { getToken } from "@/utils/token";
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedPage({
  children,
}: { children: React.ReactNode }) {
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  React.useEffect(() => {
    const token = getToken();

    if (!token) {
      setShouldRedirect(true);
    }
  }, []);

  if (shouldRedirect) {
    return <Navigate to="/auth/entrar" />;
  }

  return <>{children}</>;
}
