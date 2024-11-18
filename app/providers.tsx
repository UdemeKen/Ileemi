'use client';

import { ContextProvider } from "@/context/ContextProvider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from "sonner";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {

    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster position="top-center" richColors />
            <ContextProvider>
                {children}
            </ContextProvider>
      </QueryClientProvider>
    );
}
