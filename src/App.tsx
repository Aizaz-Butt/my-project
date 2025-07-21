import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => {
  const path = window.location.pathname;
  const isValidUrl = path === "/";

  return (
    <ThemeProvider defaultTheme={"system"} storageKey="portfolio-theme">
      {isValidUrl ? <Index /> : <NotFound />}
    </ThemeProvider>
  );
};

export default App;
