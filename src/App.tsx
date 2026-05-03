import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PsykologLillestrom from "./pages/PsykologLillestrom.tsx";
import Emdr from "./pages/Emdr.tsx";
import Istdp from "./pages/Istdp.tsx";
import Foreldreveiledning from "./pages/Foreldreveiledning.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/psykolog-lillestrom" element={<PsykologLillestrom />} />
          <Route path="/emdr" element={<Emdr />} />
          <Route path="/istdp" element={<Istdp />} />
          <Route path="/foreldreveiledning" element={<Foreldreveiledning />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
