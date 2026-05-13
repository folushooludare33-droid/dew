import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import PageLayout from "@/components/layout/PageLayout";

import Home from "@/pages/home";
import About from "@/pages/about";
import Vision from "@/pages/vision";
import Principal from "@/pages/principal";
import Academics from "@/pages/academics";
import StudentLife from "@/pages/student-life";
import Facilities from "@/pages/facilities";
import Admissions from "@/pages/admissions";
import Fees from "@/pages/fees";
import Transport from "@/pages/transport";
import Parental from "@/pages/parental";
import Testimonials from "@/pages/testimonials";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/vision" component={Vision} />
      <Route path="/principal" component={Principal} />
      <Route path="/academics" component={Academics} />
      <Route path="/student-life" component={StudentLife} />
      <Route path="/facilities" component={Facilities} />
      <Route path="/admissions" component={Admissions} />
      <Route path="/fees" component={Fees} />
      <Route path="/transport" component={Transport} />
      <Route path="/parental" component={Parental} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <PageLayout>
            <Router />
          </PageLayout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
