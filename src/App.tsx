import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DiscoveryCall from "./pages/DiscoveryCall";

const queryClient = new QueryClient();

const MetaPixelRouteTracker = () => {
  const { pathname, search } = useLocation();
  const isFirstPageView = useRef(true);

  useEffect(() => {
    if (isFirstPageView.current) {
      isFirstPageView.current = false;
      return;
    }

    (window as Window & { fbq?: (...args: string[]) => void }).fbq?.("track", "PageView");
  }, [pathname, search]);

  return null;
};

// Shared by the browser entry (main.tsx) and the pre-render entry (entry-server.tsx).
export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/discovery-call" element={<DiscoveryCall />} />
    <Route path="/workshops" element={<Navigate to="/discovery-call" replace />} />
    <Route path="/application" element={<Navigate to="/discovery-call" replace />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE, AND TO src/seo.ts SO THEY ARE PRE-RENDERED */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <MetaPixelRouteTracker />
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
