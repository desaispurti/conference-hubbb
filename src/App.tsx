import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "./components/layout/SiteLayout";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import UpcomingConferences from "./pages/UpcomingConferences";
import RecentConferences from "./pages/RecentConferences";
import RecentProceedings from "./pages/RecentProceedings";
import PastSpeakers from "./pages/PastSpeakers";
import AdvisorySpeakers from "./pages/AdvisorySpeakers";
import InnovationChallenge from "./pages/InnovationChallenge";
import Registration from "./pages/Registration";
import ApplyReviewer from "./pages/ApplyReviewer";
import ApplyAdvisory from "./pages/ApplyAdvisory";
import Books from "./pages/Books";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/upcoming-conferences" element={<UpcomingConferences />} />
            <Route path="/recent-conferences" element={<RecentConferences />} />
            <Route path="/recent-proceedings" element={<RecentProceedings />} />
            <Route path="/past-speakers" element={<PastSpeakers />} />
            <Route path="/advisory-speakers" element={<AdvisorySpeakers />} />
            <Route path="/innovation-challenge-2026" element={<InnovationChallenge />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/apply-reviewer" element={<ApplyReviewer />} />
            <Route path="/apply-advisory" element={<ApplyAdvisory />} />
            <Route path="/books" element={<Books />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
