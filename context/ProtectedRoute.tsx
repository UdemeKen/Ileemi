"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/context/ContextProvider";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  authRequired?: boolean;
}> = ({ children, authRequired = false }) => {
  const { userToken } = useStateContext();
  const router = useRouter();

  // Immediate check for token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (authRequired && !token) {
      router.push("/sign-in");
    }
  }, [router, authRequired]);

  // Regular auth state check
  useEffect(() => {
    if (!authRequired && userToken) {
      router.push("/page/dashboard");
    }
    if (authRequired && !userToken) {
      router.push("/sign-in");
    }
  }, [userToken, router, authRequired]);

  if (authRequired) {
    const token = localStorage.getItem("TOKEN");
    return token ? <>{children}</> : null;
  }
  return !userToken ? <>{children}</> : null;
};

export default ProtectedRoute;
