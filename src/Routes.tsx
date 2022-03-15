import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompoundInterests } from "./pages/simulators/compoundInterests";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompoundInterests />} />
      </Routes>
    </BrowserRouter>
  );
}
