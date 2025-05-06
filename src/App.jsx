import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import ExchangeRatePage from "./pages/ExchangeRatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange_rates_live" element={<ExchangeRatePage />} />
        <Route path="/error_page" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
