import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import { Slider } from "./pages/Slider";

function App() {
  return (
    <div className="dark:bg-slate-900">
      < Header />
      < Slider />
      < AllRoutes />
      < Footer />
    </div>
  );
}

export default App;
