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
import Angst from "./pages/Angst.tsx";
import Depresjon from "./pages/Depresjon.tsx";
import Spiseforstyrrelser from "./pages/Spiseforstyrrelser.tsx";
import Traumer from "./pages/Traumer.tsx";
import Tvangslidelser from "./pages/Tvangslidelser.tsx";
import Livskriser from "./pages/Livskriser.tsx";
import Utbrenthet from "./pages/Utbrenthet.tsx";
import Stress from "./pages/Stress.tsx";
import RelasjonelleVansker from "./pages/RelasjonelleVansker.tsx";
import LavSelvfølelse from "./pages/LavSelvfølelse.tsx";

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
          <Route path="/angst" element={<Angst />} />
          <Route path="/depresjon" element={<Depresjon />} />
          <Route path="/spiseforstyrrelser" element={<Spiseforstyrrelser />} />
          <Route path="/traumer" element={<Traumer />} />
          <Route path="/tvangslidelser" element={<Tvangslidelser />} />
          <Route path="/livskriser" element={<Livskriser />} />
          <Route path="/utbrenthet" element={<Utbrenthet />} />
          <Route path="/stress" element={<Stress />} />
          <Route path="/relasjonelle-vansker" element={<RelasjonelleVansker />} />
          <Route path="/lav-selvfølelse" element={<LavSelvfølelse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
