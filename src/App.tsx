import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
    <Index />
  </ThemeProvider>
);

export default App;
