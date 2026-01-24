import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SaasDevelopment from "./pages/SaasDevelopment";
import AiMarketing from "./pages/AiMarketing";
import GeoOptimization from "./pages/GeoOptimization";
import CaseStudyTemplate from "./pages/CaseStudyTemplate";
import CitationEngineering from "./pages/CitationEngineering";
import Insights from "./pages/Insights";
import ConversationalLandingPages from "./pages/ConversationalLandingPages";
import SchemaBuilder from "./pages/SchemaBuilder";
import Audit from "./pages/Audit";
import Pricing from "./pages/Pricing";
import BlogPostTemplate from "./pages/BlogPostTemplate";


import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/saas-development"} component={SaasDevelopment} />
      <Route path="/ai-marketing" component={AiMarketing} />
      <Route path="/geo-optimization" component={GeoOptimization} />
      <Route path="/case-study/:slug" component={CaseStudyTemplate} />
      <Route path="/citation-engineering" component={CitationEngineering} />
      <Route path="/insights" component={Insights} />
      <Route path="/insights/:slug" component={BlogPostTemplate} />
      <Route path="/conversational-landing-pages" component={ConversationalLandingPages} />
      <Route path="/schema-builder" component={SchemaBuilder} />
      <Route path="/audit" component={Audit} />
      <Route path="/pricing" component={Pricing} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
      <Analytics />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
